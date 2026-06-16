import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveSubcategoryByID from "../../../business/Subcategory/ActiveSubcategoryByID.service.js";
const activeSchema = {
    SubcategoryID: { type: "string", required: true },
  };
export default async function ActiveSubcategoryByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { SubcategoryID } = req.body;
    try {
        const result = await ActiveSubcategoryByID({ SubcategoryID });
        if (!result) return NotFound(res, "Subcategory not found");
        return Ok(res, "Subcategory activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
