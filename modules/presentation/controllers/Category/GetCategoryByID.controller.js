import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetCategoryByID from "../../../business/Category/GetCategoryByID.service.js";
export default async function GetCategoryByIDController(req, res) {
    const { CategoryID } = req.body;
    try {
        const category = await GetCategoryByID(CategoryID);
        if (!category) {
            return NotFound(res, "Category not found");
        }
        return Ok(res, "Category fetched successfully", category);
    } catch (err) {
        return ServerError(res, err.message);
    }
}