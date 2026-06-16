import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetCategoryByID from "../../../business/Category/GetCategoryByID.service.js";
const getByIDSchema = {
    CategoryID: { type: "string", required: true },
  };
export default async function GetCategoryByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { CategoryID } = req.body;
    try {
        const result = await GetCategoryByID({ CategoryID });
        if (!result) return NotFound(res, "Category not found");
        return Ok(res, "Category fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
