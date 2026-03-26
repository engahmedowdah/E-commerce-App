import { Ok, ServerError } from "../../../../shared/utils.js";
import GetImagesByProductID from "../../../business/Image/GetImagesByProductID.service.js";

export default async function GetImagesByProductIDController(req, res) {
    const { ProductId } = req.body;
    try {
        const images = await GetImagesByProductID(ProductId);
        return Ok(res, "Images retrieved successfully", images);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
