import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetCategoryBySlug from "../../../business/Category/GetCategoryBySlug.service.js";

export default async function GetCategoryBySlugController(req, res) {
    const { Slug } = req.body;
    try {
        const category = await GetCategoryBySlug(Slug);
        if (!category) {
            return NotFound(res, "Category not found");
        }
        return Ok(res, "Category fetched successfully", category);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
