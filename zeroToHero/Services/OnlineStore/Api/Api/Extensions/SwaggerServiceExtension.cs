using Api.Filters;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Interfaces;
using Microsoft.OpenApi.Models;

namespace Api.Extensions;

public static class SwaggerServiceExtension
{

    public static IServiceCollection AddSwaggerServices(this IServiceCollection services)
    {
        var extensions = new Dictionary<string, IOpenApiExtension>();

        extensions.Add("x-logo", new OpenApiObject
        {
            { "url", new OpenApiString("./docs/images/logo.png") },
            { "backgroundColor", new OpenApiString("#FFFFFF") },
            { "altText", new OpenApiString("Marcelo Dotnet Developer") }
        });

        services.AddEndpointsApiExplorer();

        services.AddSwaggerGen(c =>
        {
            c.EnableAnnotations();
            c.AddServer(new OpenApiServer { Url = "", Description = "OnlineStore" });
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "ZTH Online Store API",
                Version = "v1.0.0",
                Contact = new OpenApiContact
                {
                    Name = "Marcelo de Oliveira Francisco",
                    Email = "marcdfranc@gmail.com"
                },
                License = new OpenApiLicense
                {
                    Name = "MIT License",
                    Url = new Uri("http://opensource.org/licenses/MIT")
                },
                Extensions = extensions
            });

            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Name = "x-api-key",
                Scheme = "ApiKey",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.ApiKey,
                Description = "x-api-key Authorization header using x-api-key scheme. Example \"x-api-key: {API_KEY}\""
            });

            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    new string[] { }
                }
            });
            c.OperationFilter<ResponseHeaderOperationFilter>();
        }).AddSwaggerGenNewtonsoftSupport();

        return services;
    }
}