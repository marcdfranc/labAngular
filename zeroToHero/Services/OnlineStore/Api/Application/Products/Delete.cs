using Application.AppCore;
using MediatR;
using Repository;

namespace Application.Products;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public Guid ProductId { get; set; }
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
            var product = await _context.Products.FindAsync(request.ProductId);

            if (product == null) return null!;

            _context.Products.Remove(product);

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Failure on delete Product");
        }
    }
}
