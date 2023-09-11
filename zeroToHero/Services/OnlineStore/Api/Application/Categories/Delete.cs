using Application.AppCore;
using MediatR;
using Repository;

namespace Application.Categories;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public Guid CategoryId { get; set; }        
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
            var category = await _context.Categories.FindAsync(request.CategoryId);

            if (category == null) return null!;

            _context.Remove(category);

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Failure on delete Category");
        }
    }

}
