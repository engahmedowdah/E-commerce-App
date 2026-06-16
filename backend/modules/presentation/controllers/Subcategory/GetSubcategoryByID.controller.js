import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetSubcategoryByID from "../../../business/Subcategory/GetSubcategoryByID.service.js";
const getByIDSchema = {
    SubcategoryID: { type: "string", required: true },
  };
export default async function GetSubcategoryByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { SubcategoryID } = req.body;
    try {
        const result = await GetSubcategoryByID({ SubcategoryID });
        if (!result) return NotFound(res, "Subcategory not found");
        return Ok(res, "Subcategory fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
