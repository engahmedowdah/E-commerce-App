import { Ok, NotFound, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetSubcategoryBySlug from "../../../business/Subcategory/GetSubcategoryBySlug.service.js";
const getBySlugSchema = {
    Slug: { type: "string", required: true },
};
export default async function GetSubcategoryBySlugController(req, res) {
    const error = ValidateSchema(req.body, getBySlugSchema);
    if (error) return BadRequest(res, error);
    const { Slug } = req.body;
    try {
        const subcategory = await GetSubcategoryBySlug({ Slug });
        if (!subcategory) {
            return NotFound(res, "Subcategory not found");
        }
        return Ok(res, "Subcategory fetched successfully", subcategory);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
