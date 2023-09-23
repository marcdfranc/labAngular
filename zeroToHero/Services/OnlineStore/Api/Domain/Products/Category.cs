using System.ComponentModel.DataAnnotations;

namespace Domain.Products;

public class Category
{
    public Guid Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string? Name { get; set; }

    [Required]
    public DateTime Created { get; set; }

    public List<Product> Products { get; set; } = new List<Product>();
}
