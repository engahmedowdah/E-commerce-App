import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetSubcategoryByID from "../../../business/Subcategory/GetSubcategoryByID.service.js";
export default async function GetSubcategoryByIDController(req, res) {
    const { SubcategoryID } = req.body;
    try {
        const result = await GetSubcategoryByID(SubcategoryID);
        if (!result) {
            return NotFound(res, "Subcategory not found");
        }
        return Ok(res, "Subcategory fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}