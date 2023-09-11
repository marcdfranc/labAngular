using Application.AppCore.Dtos;
using FluentValidation;
using Repository;

namespace Application.AppCore.Validators;

public class ProductValidator : AbstractValidator<ProductData>
{
    public ProductValidator(DataContext context)
    {
        RuleFor(x => x.Category)
            .Must(category => context.Categories.Any(c => c.Name == category))
            .WithMessage(x => $"{x.Category} is not a valid Category");
    }
}
