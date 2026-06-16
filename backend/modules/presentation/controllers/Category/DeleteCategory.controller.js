import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteCategory from "../../../business/Category/DeleteCategory.service.js";
const deleteSchema = {
    CategoryID: { type: "string", required: true },
  };
export default async function DeleteCategoryController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { CategoryID } = req.body;
    try {
        const result = await DeleteCategory({ CategoryID });
        if (!result) return NotFound(res, "Category not found");
        return Ok(res, "Category deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
