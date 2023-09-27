using System.ComponentModel.DataAnnotations;

namespace Domain.Carts;

public class Cart
{
    public Guid Id { get; set; }
    public decimal Price { get; set; }
    [Required]
    public bool Closed { get; set; }
    public DateTime Created { get; set; }
    public List<CartItem> CartItems { get; set; } = new List<CartItem>();
}