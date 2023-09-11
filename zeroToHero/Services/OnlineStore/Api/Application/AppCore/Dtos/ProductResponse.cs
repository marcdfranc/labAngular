namespace Application.AppCore.Dtos;

internal class ProductResponse
{
    public Guid Id { get; set; }
   
    public string? Name { get; set; }
    
    public string? Description { get; set; }
    
    public decimal? Price { get; set; }

    public DateTime Created { get; set; }
    
    public string? Category { get; set; }
}
