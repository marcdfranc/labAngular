using Api.Dtos;
using Api.Extensions;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Api.Filters;

public class ResponseHeaderOperationFilter : IOperationFilter
{
    public void Apply(OpenApiOperation operation, OperationFilterContext context)
    {
        var actionAttributes = context.GetControllerAndActionAttr<ProducesResponseHeaderType>();

        foreach (var attr in actionAttributes)
        {
            var response = attr?.HttpCode != null ? operation.Responses[attr.HttpCode.ToString()] : null;

            if (response != null)
            {
                if (response.Headers == null) response.Headers = new Dictionary<string, OpenApiHeader>();

                var hValue = new OpenApiHeader
                {
                    Description = attr?.Description,
                    Schema = context.SchemaGenerator.GenerateSchema(attr?.Type, context.SchemaRepository)
                };
                response.Headers.Add(attr?.Name, hValue);
            }
        }
    }
}