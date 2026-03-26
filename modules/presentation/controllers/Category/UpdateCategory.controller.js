import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateCategory from "../../../business/Category/UpdateCategory.service.js";
export default async function UpdateCategoryController(req, res) {
    const { CategoryID, Description, IsActive, Name, Slug } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const category = await UpdateCategory(CategoryID, { Name, Description, Slug, IsActive, UpdatedBy });
        if (!category) {
            return NotFound(res, "Category not found");
        }
        return Ok(res, "Category updated successfully", category);
    } catch (err) {
        return ServerError(res, err.message);
    }
}