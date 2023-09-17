using Application.AppCore;
using Application.AppCore.Dtos;
using AutoMapper;
using Domain.Products;
using MediatR;
using Repository;

namespace Application.Products;

public class Create
{
    public class Command : IRequest<Result<Guid>>
    {
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
            var product = _mapper.Map<Product>(request.Product);           

            await _context.Products.AddAsync(product);

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Guid>.Success(product.Id) : Result<Guid>.Failure("Failure on create Product");
        }
    }
}
