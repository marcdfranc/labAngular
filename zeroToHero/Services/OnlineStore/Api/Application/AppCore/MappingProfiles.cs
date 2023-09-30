using Application.AppCore.Dtos;
using AutoMapper;
using Domain.Carts;
using Domain.Products;

namespace Application.AppCore;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<CategoryData, Category>();
        CreateMap<Category, CategoryResponse>();

        CreateMap<ProductData, Product>();
        CreateMap<Product, ProductResponse>();

        CreateMap<Cart, CartResponse>();
        CreateMap<CartItem, CartItemResponse>();
        CreateMap<CartItemData, CartItem>();
    }
}
