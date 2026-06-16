import { Ok, ServerError, NotFound } from "../../../../shared/utils.js";
import GetAllSubcategories from "../../../business/Subcategory/GetAllSubcategories.service.js";
export default async function GetAllSubcategoriesController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllSubcategories({ page, limit, sort });
        if (!result) return NotFound(res, "No subcategories found");
        return Ok(res, "Subcategories fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
