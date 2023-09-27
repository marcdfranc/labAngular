using Application.AppCore;
using Domain.Carts;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Repository;

namespace Application.Carts;

public class Create
{
    public class Command : IRequest<Result<Guid>>
    {
        
    }

    public class Handler : IRequestHandler<Command, Result<Guid>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<Guid>> Handle(Command request, CancellationToken cancellationToken)
        {
            var cart = await _context.Carts
                .Where(c => !c.Closed)
                .FirstOrDefaultAsync();

            if (cart != null) return Result<Guid>.Failure("There is already an active cart");

            cart = new Cart
            {
                Created = DateTime.Now,
                Closed = false
            };

            await _context.Carts.AddAsync(cart);

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Guid>.Success(cart.Id) : Result<Guid>.Failure("Failure on create a new cart");
        }
    }
}
