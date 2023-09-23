using Application.AppCore.Dtos;
using FluentValidation;
using Repository;

namespace Application.AppCore.Validators;

public class ProductValidator : AbstractValidator<ProductData>
{
    public ProductValidator(DataContext context)
    {
        RuleFor(x => x.CategoryId)
            .Must(categoryId => context.Categories.Any(c => c.Id == categoryId))
            .WithMessage(x => $"{x.CategoryId} is not a valid 'CategoryId'");
    }
}
