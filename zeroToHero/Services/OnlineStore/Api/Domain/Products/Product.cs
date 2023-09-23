using System.ComponentModel.DataAnnotations;

namespace Domain.Products;
public class Product
{
    public Guid Id { get; set; }
    
    [MaxLength(75)]
    [Required]
    public string? Name { get; set; }

    [MaxLength(250)]
    public string? Description { get; set; }

    [Required]
    public decimal? Price { get; set; }

    public DateTime Created { get; set; }

    [Required]
    public Guid CategoryId { get; set; }
    public Category? Category { get; set; }
}
