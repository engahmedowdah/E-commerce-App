import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateReview from "../../../business/Review/CreateReview.service.js";
export default async function CreateReviewController(req, res) {
    const { Comment, ProductID, Rating } = req.body;
    const UserID = req.body.UserId;
    const CreatedBy = req.body.UserId;
    if (!ProductID || !UserID || Rating === undefined) {
        return BadRequest(res, "ProductID, UserID, and Rating are required");
    }
    try {
        const result = await CreateReview({ ProductID, UserID, Rating, Comment, CreatedBy });
        return Created(res, "Review created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
