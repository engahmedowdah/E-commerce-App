import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateReview from "../../../business/Review/UpdateReview.service.js";
const updateSchema = {
    ReviewID: { type: "string", required: true },
    ProductID: { type: "string", required: true },
    UserID: { type: "string", required: true },
    Comment: { type: "string", required: true },
    Rating: { type: "number", required: true },
};
export default async function UpdateReviewController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { ReviewID, ProductID, UserID, Comment, Rating } = req.body;
    try {
        const result = await UpdateReview({ ReviewID, ProductID, UserID, Comment, Rating });
        if (!result) {
            return BadRequest(res, "Failed to update review");
        }
        return Created(res, "Review created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
