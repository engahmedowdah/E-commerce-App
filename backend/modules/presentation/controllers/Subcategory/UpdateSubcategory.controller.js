import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateSubcategory from "../../../business/Subcategory/UpdateSubcategory.service.js";
const updateSchema = {
    SubcategoryID: { type: "string", required: true },
    Name: { type: "string", required: false },
    Description: { type: "string", required: false },
    CategoryID: { type: "string", required: false },
    Slug: { type: "string", required: false },
    IsActivated: { type: "boolean", required: false },
};
export default async function UpdateSubcategoryController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { SubcategoryID, Name, Description, CategoryID, Slug, IsActivated } = req.body;
    try {
        const result = await UpdateSubcategory({ SubcategoryID, Name, Description, CategoryID, Slug, IsActivated });
        if (!result) return NotFound(res, "Subcategory not found");
        return Ok(res, "Subcategory updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
