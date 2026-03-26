import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteCategory from "../../../business/Category/DeleteCategory.service.js";
export default async function DeleteCategoryController(req, res) {
    const { CategoryID } = req.body;
    try {
        const category = await DeleteCategory(CategoryID);
        if (!category) {
            return NotFound(res, "Category not found");
        }
        return NoContent(res, "Category deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}