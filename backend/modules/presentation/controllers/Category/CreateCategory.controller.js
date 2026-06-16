import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateCategory from "../../../business/Category/CreateCategory.service.js";
const createSchema = {
    Name: { type: "string", required: true },
    Slug: { type: "string", required: true },
    Description: { type: "string", required: false },
    IsActivated: { type: "boolean", required: false },
};
export default async function CreateCategoryController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    try {
        const { Name, Description, IsActivated, Slug } = req.body;
        if (!Name || !Slug) {
            return BadRequest(res, "Please provide all required fields (Name, Slug)");
        }
        const category = await CreateCategory({ Name, Description, IsActivated, Slug });
        if (!category) {
            return BadRequest(res, "Failed to create category");
        }
        return Created(res, "Category created successfully", category);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
