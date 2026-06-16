import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateCategory from "../../../business/Category/UpdateCategory.service.js";
const updateSchema = {
      CategoryID: { type: "string", required: true },
      Name: { type: "string", required: false },
      Description: { type: "string", required: false },
      Slug: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateCategoryController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { CategoryID, Name, Description, Slug, IsActivated } = req.body;
    try {
        const result = await UpdateCategory({ CategoryID, Name, Description, Slug, IsActivated });
        if (!result) return NotFound(res, "Category not found");
        return Ok(res, "Category updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
