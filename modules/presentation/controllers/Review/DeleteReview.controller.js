import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteReview from "../../../business/Review/DeleteReview.service.js";
export default async function DeleteReviewController(req, res) {
    const { ReviewID } = req.body;
    try {
        const result = await DeleteReview(ReviewID);
        if (!result) {
            return NotFound(res, "Review not found");
        }
        return NoContent(res, "Review deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}
