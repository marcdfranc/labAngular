﻿using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Application.AppCore.Dtos;

public class ProductData
{
    [Required]
    public string? Name { get; set; }

    [MaxLength(250)]
    public string? Description { get; set; }

    [Required]
    public decimal? Price { get; set; }

    [Required]
    public Guid CategoryId { get; set; }

    [JsonIgnore]
    public DateTime Created { get => DateTime.Now;  }
}
