using Swashbuckle.AspNetCore.SwaggerGen;
using System.Reflection;

namespace Api.Extensions;

public static class OperationFilterContextExtension
{

    public static IEnumerable<T> GetControllerAndActionAttr<T>(this OperationFilterContext context) where T : Attribute
    {
        if (context.MethodInfo != null)
        {
            var controllerAttributes = context.MethodInfo.DeclaringType?.GetTypeInfo().GetCustomAttributes<T>();
            var actionAttributes = context.MethodInfo.GetCustomAttributes<T>();
            var result = new List<T>(actionAttributes);
            if (controllerAttributes != null)
            {
                result.AddRange(controllerAttributes);
            }
            return result;
        }

#if NETCOREAPP3_1_OR_GREATER
        if (context.ApiDescription.ActionDescriptor.EndpointMetadata != null)
        {
            var endpointAttributes = context.ApiDescription.ActionDescriptor.EndpointMetadata.OfType<T>();
            var result = new List<T>(endpointAttributes);
        }
#endif
        return Enumerable.Empty<T>();
    }
}
