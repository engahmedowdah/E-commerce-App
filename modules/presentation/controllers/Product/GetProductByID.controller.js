import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetProductByID from "../../../business/Product/GetProductByID.service.js";
export default async function GetProductByIDController(req, res) {
    const { ProductID } = req.body;
    try {
        const product = await GetProductByID(ProductID);
        if (!product) {
            return NotFound(res, "Product not found");
        }
        return Ok(res, "Product fetched successfully", product);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
