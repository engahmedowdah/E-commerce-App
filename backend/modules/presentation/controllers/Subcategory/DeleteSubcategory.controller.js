import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteSubcategory from "../../../business/Subcategory/DeleteSubcategory.service.js";
const deleteSchema = {
    SubcategoryID: { type: "string", required: true },
  };
export default async function DeleteSubcategoryController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { SubcategoryID } = req.body;
    try {
        const result = await DeleteSubcategory({ SubcategoryID });
        if (!result) return NotFound(res, "Subcategory not found");
        return Ok(res, "Subcategory deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
