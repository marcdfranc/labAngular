namespace Domain.Orders;

public class Order
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public string? Address { get; set; }
    public string? Postcode { get; set; }
    public string? Country { get; set; }
    public bool Shipped { get; set; }

}
