using Application.AppCore;
using Application.AppCore.Dtos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Repository;

namespace Application.Carts;

public class RemoveItem
{
    public class Command : IRequest<Result<Unit>>
    {
        public Guid CartId { get; set; }
        public required CartItemData CartItem { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var cartItem = await _context.CartItems
                .Where(ci => ci.CartId == request.CartId && ci.ProductId == request.CartItem.ProductId)
                .FirstOrDefaultAsync();

            if (cartItem == null) return null!;

            if (request.CartItem.Quantity > cartItem.Quantity) return Result<Unit>.Failure($"Quantity must be less than {cartItem.Quantity + 1}");

            if (cartItem.Quantity == request.CartItem.Quantity)
            {
                _context.CartItems.Remove(cartItem);
            }
            else
            {
                cartItem.Quantity-= request.CartItem.Quantity;
            }

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Failure on remove Carte Items");
        }
    }

}
