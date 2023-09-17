using Application.AppCore;
using Application.AppCore.Dtos;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Repository;

namespace Application.Categories;

public class List
{
    public class Query : IRequest<Result<PagedList<CategoryResponse>>>
    {
        public required PagingParams Params { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<PagedList<CategoryResponse>>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<PagedList<CategoryResponse>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var query = _context.Categories
                .ProjectTo<CategoryResponse>(_mapper.ConfigurationProvider)
                .OrderBy(c => c.Created).AsQueryable();

            return Result<PagedList<CategoryResponse>>.Success(
               await PagedList<CategoryResponse>.CreateAsync(query, request.Params?.PageNumber ?? 1, request.Params?.PageSize ?? 10)
            );
        }
    }

}
