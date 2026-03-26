import { Ok, ServerError } from "../../../../shared/utils.js";
import GetProductReviewsByProductID from "../../../business/Review/GetProductReviewsByProductID.service.js";
export default async function GetProductReviewsByProductIDController(req, res) {
    const { ProductID } = req.body;
    try {
        const result = await GetProductReviewsByProductID(ProductID);
        return Ok(res, "Product reviews fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
