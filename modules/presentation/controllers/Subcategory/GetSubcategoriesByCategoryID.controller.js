import { Ok, ServerError } from "../../../../shared/utils.js";
import GetSubcategoriesByCategoryID from "../../../business/Subcategory/GetSubcategoriesByCategoryID.service.js";
export default async function GetSubcategoriesByCategoryIDController(req, res) {
    const { CategoryID } = req.body;
    try {
        const result = await GetSubcategoriesByCategoryID(CategoryID);
        return Ok(res, "Subcategories fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
