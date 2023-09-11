using Application.AppCore;
using Application.AppCore.Dtos;
using MediatR;
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

        public Handler(DataContext context)
        {
            _context = context;
        }

        Task<Result<ProductResponse>> IRequestHandler<Query, Result<ProductResponse>>.Handle(Query request, CancellationToken cancellationToken)
        {

            throw new NotImplementedException();
        }
    }
}
