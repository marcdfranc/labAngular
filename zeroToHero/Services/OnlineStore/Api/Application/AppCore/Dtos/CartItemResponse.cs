namespace Application.AppCore.Dtos;

public class CartItemResponse
{   
    public int Quantity { get; set; }

    public decimal LineTotal { get => this.Product.Price * this.Quantity;  }

    public required ProductResponse Product { get; set; }
}
