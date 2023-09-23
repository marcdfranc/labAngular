using Api.Dtos;
using Application.AppCore;
using Application.AppCore.Dtos;
using Application.AppCore.Params;
using Application.Products;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
namespace Api.Controllers;

public class ProductController : BaseApiController
{
    [HttpPost]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Create Product", OperationId = "CreateProduct", Description = "Create a new Product registry")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<Guid>> Create([FromBody] ProductData product)
    {
        return HandleResult(await Mediator.Send(new Create.Command { Product = product}));
    }

    [HttpDelete("{productId}")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Delete Product", OperationId = "DeleteProduct", Description = "Delete a Product")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Delete([FromRoute] Guid productId)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { ProductId = productId}));
    }

    [HttpGet("{productId}")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Detail Product", OperationId = "DetailProduct", Description = "Detail a Product registry")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<ProductResponse>> Detail([FromRoute] Guid productId)
    {
        return HandleResult(await Mediator.Send(new Detail.Query { ProductId = productId}));
    }

    [HttpPut("{productId}")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Edit Product", OperationId = "EditProduct", Description = "Edit a Product registry")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Edit([FromRoute] Guid productId , [FromBody] ProductData product)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { ProductId = productId, Product = product}));
    }

    [HttpGet]
    [Produces("application/json")]
    [SwaggerOperation(summary: "List Product", OperationId = "ListProducts", Description = "List paginated Products")]
    [ProducesResponseHeaderType(Type = typeof(Pagination), HttpCode = StatusCodes.Status200OK, Name = "Pagination")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<PagedList<ProductResponse>>> List([FromQuery] ProductParams parameters)
    {
        return HandlePagedResult(await Mediator.Send(new List.Query { Params = parameters}));
    }
}
