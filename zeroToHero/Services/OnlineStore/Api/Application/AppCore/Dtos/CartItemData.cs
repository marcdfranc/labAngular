using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Application.AppCore.Dtos;

public class CartItemData
{    
    [Required]
    public int Quantity { get; set; }

    [Required]
    public Guid ProductId { get; set; }

}
