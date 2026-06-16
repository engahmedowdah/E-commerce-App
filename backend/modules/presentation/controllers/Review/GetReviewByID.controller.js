import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetReviewByID from "../../../business/Review/GetReviewByID.service.js";
const getByIDSchema = {
    ReviewID: { type: "string", required: true },
  };
export default async function GetReviewByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { ReviewID } = req.body;
    try {
        const result = await GetReviewByID({ ReviewID });
        if (!result) return NotFound(res, "Review not found");
        return Ok(res, "Review fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
