using Application.AppCore;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Repository;

namespace Application.Cartsl;

public class Clear
{
    public class Command : IRequest<Result<Unit>>
    {
        public Guid CartId { get; set; }
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
            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .Where(c => c.Id == request.CartId)
                .FirstOrDefaultAsync();

            if (cart == null) return null!;

            if (cart.CartItems.Any()) return Result<Unit>.Success(Unit.Value);

            _context.CartItems.RemoveRange(cart.CartItems);

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Unit>.Success(Unit.Value)
                : Result<Unit>.Failure("Faillure on clear cart");
        }
    }
}
