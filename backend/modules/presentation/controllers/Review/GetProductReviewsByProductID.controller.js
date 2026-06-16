import { Ok, ServerError, BadRequest, NotFound, ValidateSchema } from "../../../../shared/utils.js";
import GetProductReviewsByProductID from "../../../business/Review/GetProductReviewsByProductID.service.js";
const getByProductIDSchema = {
    ProductID: { type: "string", required: true },
};
export default async function GetProductReviewsByProductIDController(req, res) {
    const error = ValidateSchema(req.body, getByProductIDSchema);
    if (error) return BadRequest(res, error);
    const { ProductID } = req.body;
    const { page = 1, limit = 10, sort = "newest" } = req.query;
    try {
        const result = await GetProductReviewsByProductID({ ProductID, page, limit, sort });
        return Ok(res, "Product reviews fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
