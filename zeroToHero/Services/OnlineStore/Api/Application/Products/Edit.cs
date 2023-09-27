using Application.AppCore;
using Application.AppCore.Dtos;
using AutoMapper;
using MediatR;
using Repository;

namespace Application.Products;

public class Edit
{
    public class Command : IRequest<Result<Guid>>
    {
        public Guid ProductId { get; set; }
        public required ProductData Product { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Guid>>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public Handler(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<Guid>> Handle(Command request, CancellationToken cancellationToken)
        {
            var product = await _context.Products.FindAsync(request.ProductId);

            if (product == null) return null!;

            _mapper.Map(product, request.Product);                      

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Guid>.Success(product.Id) : Result<Guid>.Failure("Failure on edit Product");
        }
    }
}
