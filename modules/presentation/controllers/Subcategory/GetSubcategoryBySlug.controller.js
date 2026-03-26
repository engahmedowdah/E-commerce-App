import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetSubcategoryBySlug from "../../../business/Subcategory/GetSubcategoryBySlug.service.js";

export default async function GetSubcategoryBySlugController(req, res) {
    const { Slug } = req.body;
    try {
        const subcategory = await GetSubcategoryBySlug(Slug);
        if (!subcategory) {
            return NotFound(res, "Subcategory not found");
        }
        return Ok(res, "Subcategory fetched successfully", subcategory);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
