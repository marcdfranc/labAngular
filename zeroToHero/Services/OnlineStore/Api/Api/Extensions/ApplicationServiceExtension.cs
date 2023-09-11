using Application.Categories;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Repository;
using Microsoft.Extensions.DependencyInjection;
using Application.AppCore;
using FluentValidation;
using Application.AppCore.Validators;

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

        services.AddValidatorsFromAssemblyContaining<Create>();

        return services;
    }
}
