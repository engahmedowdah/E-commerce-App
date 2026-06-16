import { Ok, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetCartByUserID from "../../../business/Cart/GetCartByUserID.service.js";
const getCartByUserIDSchema = {
    UserID: { type: "string", required: true },
};
export default async function GetCartByUserIDController(req, res) {
    const { page, limit, sort } = req.query;
    const error = ValidateSchema(req.body, getCartByUserIDSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        const cart = await GetCartByUserID({ UserID, page, limit, sort });
        return Ok(res, "Cart fetched successfully", cart);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
