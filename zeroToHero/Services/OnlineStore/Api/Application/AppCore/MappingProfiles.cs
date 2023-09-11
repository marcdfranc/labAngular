using Application.AppCore.Dtos;
using AutoMapper;
using Domain.Products;

namespace Application.AppCore;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<CategoryData, Category>();
        CreateMap<Product, ProductResponse>()
            .ForMember(x => x.Category, d => d.MapFrom(p => p.Category!.Name));
    }
}
