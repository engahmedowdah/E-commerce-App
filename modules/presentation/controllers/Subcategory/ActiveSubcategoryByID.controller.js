import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveSubcategoryByID from "../../../business/Subcategory/ActiveSubcategoryByID.service.js";

export default async function ActiveSubcategoryByIDController(req, res) {
    const { SubcategoryID } = req.body;
    try {
        const subcategory = await ActiveSubcategoryByID(SubcategoryID);
        if (!subcategory) {
            return BadRequest(res, "Failed to activate subcategory or subcategory not found");
        }
        return Ok(res, "Subcategory activated successfully", subcategory);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
