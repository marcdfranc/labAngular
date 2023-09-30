namespace Application.AppCore.Dtos;

public class CartResponse
{
    public Guid Id { get; set; }
    public decimal Price { get; set; }    
    public decimal Total { get => this.CartItems.Sum(ci => ci.LineTotal); }    
    public bool Closed { get; set; }
    public DateTime Created { get; set; }
    public List<CartItemResponse> CartItems { get; set; } = new List<CartItemResponse>();

}
