import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateCategory from "../../../business/Category/CreateCategory.service.js";
export default async function CreateCategoryController(req, res) {
    const { AdminId, Description, Name, Slug } = req.body;
    try {
        const CreatedBy = AdminId;
        const category = await CreateCategory({ Name, Description, Slug, CreatedBy });
        if (!category) {
            return BadRequest(res, "Failed to create category");
        }
        return Created(res, "Category created successfully", category);
    } catch (err) {
        return ServerError(res, err.message);
    }
}