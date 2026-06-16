import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveCategoryByID from "../../../business/Category/ActiveCategoryByID.service.js";
const activeSchema = {
    CategoryID: { type: "string", required: true },
};
export default async function ActiveCategoryByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    try {
        const { CategoryID } = req.body;
        const result = await ActiveCategoryByID({ CategoryID });
        if (!result) return NotFound(res, "Category not found");
        return Ok(res, "Category activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
