import { Ok, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetAllSubcategoriesByCategoryID from "../../../business/Subcategory/GetAllSubcategoriesByCategoryID.service.js";
const getByCategoryIDSchema = {
    CategoryID: { type: "string", required: true },
};
export default async function GetAllSubcategoriesByCategoryIDController(req, res) {
    const error = ValidateSchema(req.body, getByCategoryIDSchema);
    if (error) return BadRequest(res, error);
    const { CategoryID } = req.body;
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllSubcategoriesByCategoryID({ CategoryID, page, limit, sort });
        return Ok(res, "Subcategories fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
