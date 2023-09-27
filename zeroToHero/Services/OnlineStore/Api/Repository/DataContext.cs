using Domain.Carts;
using Domain.Products;
using Microsoft.EntityFrameworkCore;

namespace Repository;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
        
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Cart> Carts { get; set; }
    public DbSet<CartItem> CartItems { get; set; }



    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Product>(product =>
        {
            product.HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .OnDelete(DeleteBehavior.Restrict)
                .HasForeignKey(p => p.CategoryId);

            product.Property(p => p.Created)
                .HasColumnType("timestamp without time zone");
        });

        builder.Entity<Category>()
            .Property(p => p.Created)
            .HasColumnType("timestamp without time zone");

        builder.Entity<CartItem>(cartItem =>
        {
           
            cartItem.HasOne(ci => ci.Product)
                .WithMany(p => p.CartItems)
                .OnDelete(DeleteBehavior.Restrict)
                .HasForeignKey(c => c.ProductId);
        });

        builder.Entity<Cart>()
            .Property(p => p.Created)
            .HasColumnType("timestamp without time zone");

    }
}