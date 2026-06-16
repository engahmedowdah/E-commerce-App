import { Ok, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetImagesByProductID from "../../../business/Image/GetImagesByProductID.service.js";
const getByProductIDSchema = {
    ProductID: { type: "string", required: true },
};
export default async function GetImagesByProductIDController(req, res) {
    const error = ValidateSchema(req.body, getByProductIDSchema);
    if (error) return BadRequest(res, error);
    const { ProductID } = req.body;
    try {
        const images = await GetImagesByProductID({ ProductID });
        return Ok(res, "Images retrieved successfully", images);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
