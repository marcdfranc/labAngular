using Application.AppCore;
using Domain.Products;
using MediatR;
using Repository;

namespace Application.Categories;

public class List
{
    public class Query : IRequest<Result<PagedList<Category>>>
    {
        public required PagingParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<Category>>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<PagedList<Category>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Categories.OrderBy(c => c.Created).AsQueryable();

            return Result<PagedList<Category>>.Success(
               await PagedList<Category>.CreateAsync(query, request.Params?.PageNumber ?? 1, request.Params?.PageSize ?? 10)
            );
        }
    }

}
