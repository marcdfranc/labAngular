using Domain.Products;
namespace Repository;

public class Seed
{
    public static async Task SeedData(DataContext context)
    {

        if (!context.Products.Any())
        {
            var categoryId = Guid.NewGuid();
            await context.Categories.AddAsync(new Category
            {
                Id = categoryId,
                Name = "Category 1",
                Created = DateTime.Now,
            });

            await context.Products.AddAsync(new Product
            {
                CategoryId = categoryId,
                Name = "Flyraom Lace Up Shoe",
                Description = "Sneaker Shoe (Category 1)",
                Created = DateTime.Now,
                Price = 100
            });

            await context.Products.AddAsync(new Product
            {
                CategoryId = categoryId,
                Name = "T-shirt",
                Description = "Sports T-Shirt Hight QUality (Category 1)",
                Created = DateTime.Now,
                Price = 90
            });
            
            await context.Products.AddAsync(new Product
            {
                CategoryId = categoryId,
                Name = "TR Trail Shoe",
                Description = "Running Shoes (Category 1)",
                Created = DateTime.Now,
                Price = 100
            });

            await context.SaveChangesAsync();
        }
    }
}
