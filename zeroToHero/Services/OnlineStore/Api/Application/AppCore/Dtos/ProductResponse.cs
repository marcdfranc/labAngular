using Newtonsoft.Json;

namespace Application.AppCore.Dtos;

public class ProductResponse
{
    public Guid Id { get; set; }
   
    public string? Name { get; set; }
    
    public string? Description { get; set; }
    
    public decimal? Price { get; set; }

    public DateTime Created { get; set; }

    public CategoryResponse? Category { get; set; }

    [JsonIgnore]
    public Guid? CategoryId { get; set; }
}
