import { Ok, NotFound, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetCategoryBySlug from "../../../business/Category/GetCategoryBySlug.service.js";
const getBySlugSchema = {
    slug: { type: "string", required: true },
};
export default async function GetCategoryBySlugController(req, res) {
    const error = ValidateSchema(req.body, getBySlugSchema);
    if (error) return BadRequest(res, error);
    const { slug } = req.body;
    try {
        const category = await GetCategoryBySlug({ slug, includeDeleted: false });
        if (!category) {
            return NotFound(res, "Category not found");
        }
        return Ok(res, "Category fetched successfully", category);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
