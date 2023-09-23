using Application.AppCore;
using Application.AppCore.Dtos;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Repository;

namespace Application.Products;

public class Detail
{
    public class Query : IRequest<Result<ProductResponse>>
    {
        public Guid ProductId { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<ProductResponse>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        async Task<Result<ProductResponse>> IRequestHandler<Query, Result<ProductResponse>>.Handle(Query request, CancellationToken cancellationToken)
        {
            var product = await _context.Products
                .Where(p => p.Id == request.ProductId)
                .ProjectTo<ProductResponse>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();

            if (product == null) return null!;

            return Result<ProductResponse>.Success(product);
        }
    }
}
