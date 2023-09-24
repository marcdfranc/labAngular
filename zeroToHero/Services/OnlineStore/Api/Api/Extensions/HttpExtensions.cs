using Api.Dtos;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Api.Extensions;

public static class HttpExtensions
{
    public static void AddPaginationHeader(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalPages)
    {
        var paginationHeader = new Pagination
        {
            CurrentPage = currentPage,
            ItemsPerPage = itemsPerPage,
            TotalItems = totalItems,
            TotalPages = totalPages
        };

        var serializerSettings = new JsonSerializerSettings();
        serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

        response.Headers.Add("Pagination", JsonConvert.SerializeObject(paginationHeader, serializerSettings));
        response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
    }
}
