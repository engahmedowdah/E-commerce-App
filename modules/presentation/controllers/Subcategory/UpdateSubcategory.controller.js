import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateSubcategory from "../../../business/Subcategory/UpdateSubcategory.service.js";
export default async function UpdateSubcategoryController(req, res) {
    const { CategoryID, Description, IsActivated, Name, Slug, SubcategoryID } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const result = await UpdateSubcategory({ SubcategoryID, Name, CategoryID, Description, Slug, IsActivated, UpdatedBy });
        if (!result) {
            return NotFound(res, "Subcategory not found");
        }
        return Ok(res, "Subcategory updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}