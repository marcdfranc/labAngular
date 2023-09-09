﻿namespace Domain.Products;

public class Category
{
    public Guid Id { get; set; }
    public string Description { get; set; }

    public List<Product> Products { get; set; } = new List<Product>();

}
