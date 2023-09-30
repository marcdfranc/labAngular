using Application.AppCore.Dtos;
using Application.Carts;
using Application.Cartsl;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Api.Controllers;

public class CartController : BaseApiController
{
    [HttpPut("{cartId}")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Add Item To Cart", OperationId = "AddItemToCart", Description = "Add items to cart")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> AddItem([FromRoute] Guid cartId, [FromBody] CartItemData cartItem)
    {
        return HandleResult(await Mediator.Send(new AddItem.Command { CartId = cartId, CartItem = cartItem! }));
    }

    [HttpDelete("{cartId}/clear")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Clear Cart", OperationId = "ClearCart", Description = "Clear all itens in cart")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Clear([FromRoute] Guid cartId)
    {
        return HandleResult(await Mediator.Send(new Clear.Command { CartId = cartId }));
    }
    

    [HttpPost]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Create Cart", OperationId = "CreateCart", Description = "Create a new cart")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<Guid>> Create()
    {
        return HandleResult(await Mediator.Send(new Create.Command()));
    }


    [HttpGet("active")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Detail Active Cart", OperationId = "DetailActiveCart", Description = "Detail an Active Cart")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<CartResponse>> DetailActive()
    {
        return HandleResult(await Mediator.Send(new DetailActive.Query()));
    }
    
    [HttpDelete("{cartId}")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Remove Items From Cart", OperationId = "RemoveItemsFromCart", Description = "Remove Items From Cart")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> RemoveItem([FromRoute] Guid cartId, [FromBody] CartItemData cartItem)
    {
        return HandleResult(await Mediator.Send(new RemoveItem.Command { CartId = cartId, CartItem = cartItem }));
    }
}
