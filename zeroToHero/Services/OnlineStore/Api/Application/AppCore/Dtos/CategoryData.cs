using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Application.AppCore.Dtos;

public class CategoryData
{
    [Required]
    [MaxLength(50)]
    public string? Name { get; set; }

    [JsonIgnore]
    public DateTime Created { get => DateTime.Now; }
}