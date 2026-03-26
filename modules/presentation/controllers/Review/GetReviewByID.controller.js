import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetReviewByID from "../../../business/Review/GetReviewByID.service.js";
export default async function GetReviewByIDController(req, res) {
    const { ReviewID } = req.body;
    try {
        const result = await GetReviewByID(ReviewID);
        if (!result) {
            return NotFound(res, "Review not found");
        }
        return Ok(res, "Review fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
