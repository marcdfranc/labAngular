namespace Api.Dtos;

public class ProducesResponseHeaderType : Attribute
{
    public int HttpCode { get; set; }
    public string? Name { get; set; }
    public Type? Type { get; set; }
    public object? Default { get; set; }
    public string? Description { get; set; }
}
