import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateSubcategory from "../../../business/Subcategory/CreateSubcategory.service.js";
export default async function CreateSubcategoryController(req, res) {
    const { CategoryID, Description, IsActivated, Name, Slug } = req.body;
    if (!Name || !CategoryID || !Slug) {
        return BadRequest(res, "Name, CategoryID, and Slug are required");
    }
    try {
        const CreatedBy = req.body.AdminId;
        const result = await CreateSubcategory({ Name, CategoryID, Description, Slug, IsActivated, CreatedBy });
        return Created(res, "Subcategory created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
