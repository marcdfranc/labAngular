using Domain.Products;
using System.ComponentModel.DataAnnotations;

namespace Domain.Carts;

public class CartItem
{
    public Guid Id { get; set; }
    [Required]
    public int Quantity { get; set; }

    [Required]
    public Guid CartId { get; set; }
    public Cart? Cart { get; set; }

    [Required]
    public Guid ProductId { get; set; }
    public Product? Product { get; set; }
}
