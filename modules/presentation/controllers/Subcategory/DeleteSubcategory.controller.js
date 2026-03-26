import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteSubcategory from "../../../business/Subcategory/DeleteSubcategory.service.js";
export default async function DeleteSubcategoryController(req, res) {
    const { SubcategoryID } = req.body;
    try {
        const result = await DeleteSubcategory(SubcategoryID);
        if (!result) {
            return NotFound(res, "Subcategory not found");
        }
        return NoContent(res, "Subcategory deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}
