import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateSubcategory from "../../../business/Subcategory/CreateSubcategory.service.js";
const createSchema = {
    CategoryID: { type: "string", required: true },
    Name: { type: "string", required: true },
    Description: { type: "string", required: false },
    IsActivated: { type: "boolean", required: false },
    Slug: { type: "string", required: true },
};
export default async function CreateSubcategoryController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { CategoryID, Name, Description, IsActivated, Slug } = req.body;
    try {
        const result = await CreateSubcategory({ CategoryID, Name, Description, IsActivated, Slug });
        if (!result) {
            return BadRequest(res, "Failed to create subcategory");
        }
        return Created(res, "Subcategory created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
