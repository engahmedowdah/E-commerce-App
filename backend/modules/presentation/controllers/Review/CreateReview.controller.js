import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateReview from "../../../business/Review/CreateReview.service.js";
const createSchema = {
    ProductID: { type: "string", required: true },
    UserID: { type: "string", required: true },
    Comment: { type: "string", required: true },
    Rating: { type: "number", required: true },
};
export default async function CreateReviewController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { ProductID, UserID, Comment, Rating } = req.body;
    try {
        const result = await CreateReview({ ProductID, UserID, Comment, Rating });
        if (!result) {
            return BadRequest(res, "Failed to create review");
        }
        return Created(res, "Review created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
