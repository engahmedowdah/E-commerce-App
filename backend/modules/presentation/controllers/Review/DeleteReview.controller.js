import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteReview from "../../../business/Review/DeleteReview.service.js";
const deleteSchema = {
    ReviewID: { type: "string", required: true },
  };
export default async function DeleteReviewController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { ReviewID } = req.body;
    try {
        const result = await DeleteReview({ ReviewID });
        if (!result) return NotFound(res, "Review not found");
        return Ok(res, "Review deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
