using Application.AppCore;
using Application.AppCore.Dtos;
using Application.Categories;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System;
namespace Api.Controllers;

public class CategoryController : BaseApiController
{
    [HttpPost]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Create Category", OperationId = "Create", Description = "Create a new Category registry")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<Guid>> Create([FromBody] CategoryData category)
    {
        return HandleResult(await Mediator.Send(new Create.Command { Category = category }));        
    }

    [HttpDelete("{categoryId}")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Delete Category", OperationId = "Delete", Description = "Delete a Category registry by Id")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Delete([FromRoute] Guid categoryId)
    {
        return HandleResult(await Mediator.Send(new Delete.Command { CategoryId = categoryId }));        
    }

    [HttpGet]
    [Produces("application/json")]
    [SwaggerOperation(summary: "List Category", OperationId = "List", Description = "List paginated Categories")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<Guid>> List([FromQuery] PagingParams param)
    {
        return HandleResult(await Mediator.Send(new List.Query { Params = param }));        
    }

    [HttpPut("{categoryId}")]
    [Produces("application/json")]
    [SwaggerOperation(summary: "Rename Category", OperationId = "Rename", Description = "Rename a Category by Id")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<Guid>> Rename([FromRoute] Guid categoryId, [FromBody] CategoryData category)
    {
        return HandleResult(await Mediator.Send(new Rename.Command { CategoryId = categoryId, Name = category.Name! }));        
    }
}
