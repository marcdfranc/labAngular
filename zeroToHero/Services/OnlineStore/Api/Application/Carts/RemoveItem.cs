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
            /*var cartItems = await _context.CartItems
                .Where(ci => ci.CartId == request.CartId && ci.ProductId == request.CartItem.ProductId)
                .FirstOrDefaultAsync();

            if (cartItems == null || ) */

            throw new NotImplementedException();
        }
    }

}
