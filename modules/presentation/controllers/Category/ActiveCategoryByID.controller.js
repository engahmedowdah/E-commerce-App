import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveCategoryByID from "../../../business/Category/ActiveCategoryByID.service.js";

export default async function ActiveCategoryByIDController(req, res) {
    const { CategoryID } = req.body;
    try {
        const category = await ActiveCategoryByID(CategoryID);
        if (!category) {
            return BadRequest(res, "Failed to activate category or category not found");
        }
        return Ok(res, "Category activated successfully", category);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
