using Application.AppCore;
using Application.AppCore.Dtos;
using AutoMapper;
using Domain.Carts;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Repository;

namespace Application.Carts;

public class AddItem
{
    public class Command : IRequest<Result<Unit>>
    {
        public Guid CartId { get; set; }
        public required CartItemData CartItem { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var cart = await _context.Carts.FindAsync(request.CartId);

            if (cart == null) return null!;

            var cartItem = await _context.CartItems
                .Where(ci => ci.CartId == cart.Id && ci.ProductId == request.CartItem.ProductId)
                .FirstOrDefaultAsync();

            if (cartItem == null)
            {
                cartItem = _mapper.Map<CartItem>(request.CartItem);
                await _context.AddAsync(cartItem);
            }
            else
            {
                cartItem.Quantity += request.CartItem.Quantity;
            }

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Failure on add item to Cart");
        }
    }
}
