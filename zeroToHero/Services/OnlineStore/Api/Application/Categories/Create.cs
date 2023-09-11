using Application.AppCore;
using Application.AppCore.Dtos;
using AutoMapper;
using Domain.Products;
using MediatR;
using Repository;

namespace Application.Categories;

public class Create
{
    public class Command : IRequest<Result<Guid>>
    {
        public required CategoryData Category { get; set; }
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
            var category = _mapper.Map<Category>(request.Category);

            await _context.Categories.AddAsync(category);

            var isSuccess = await _context.SaveChangesAsync() > 0;

            return isSuccess ? Result<Guid>.Success(category.Id) : Result<Guid>.Failure("Failure to create Category");
        }
    }
}
