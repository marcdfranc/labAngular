using Application.Categories;
using Microsoft.EntityFrameworkCore;
using Repository;
using Application.AppCore;
using FluentValidation;
using Application.AppCore.Validators;
using FluentValidation.AspNetCore;

namespace Api.Extensions;

public static class ApplicationServiceExtension
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<DataContext>(opt => {
            opt.UseNpgsql(config.GetConnectionString("DefaultConnection"));
                
            
        });

        services.AddAutoMapper(typeof(MappingProfiles).Assembly);
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<Create.Handler>());

        services.AddFluentValidationAutoValidation();
        services.AddValidatorsFromAssemblyContaining(typeof(ProductValidator));

        return services;
    }
}
