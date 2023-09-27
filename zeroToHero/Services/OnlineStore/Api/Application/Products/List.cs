using Application.AppCore;
using Application.AppCore.Dtos;
using Application.AppCore.Params;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Repository;

namespace Application.Products;

public class List
{
    public class Query : IRequest<Result<PagedList<ProductResponse>>>
    {
        public required ProductParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<ProductResponse>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<PagedList<ProductResponse>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Products
                .ProjectTo<ProductResponse>(_mapper.ConfigurationProvider)
                .OrderBy(p => p.Created)
                .AsQueryable();

            if (request.Params.CategoryId != null) query = query.Where(p => p.CategoryId == request.Params.CategoryId);          

            return Result<PagedList<ProductResponse>>.Success(
              await PagedList<ProductResponse>.CreateAsync(query, request.Params.PageNumber, request.Params.PageSize)
            );
        }
    }
}
