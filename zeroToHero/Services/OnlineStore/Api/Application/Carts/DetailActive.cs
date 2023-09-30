using Application.AppCore;
using Application.AppCore.Dtos;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Repository;

namespace Application.Carts;

public class DetailActive
{
    public class Query : IRequest<Result<CartResponse>>
    {
        
    }

    public class Handler : IRequestHandler<Query, Result<CartResponse>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<CartResponse>> Handle(Query request, CancellationToken cancellationToken)
        {
            var cart = await _context.Carts.Where(c => !c.Closed)
                .ProjectTo<CartResponse>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync();

            if (cart == null) return null!;

            return Result<CartResponse>.Success(cart);
        }
    }
}
