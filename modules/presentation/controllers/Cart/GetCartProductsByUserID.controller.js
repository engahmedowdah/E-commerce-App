import { Ok, ServerError } from "../../../../shared/utils.js";
import GetCartProductsByUserID from "../../../business/Cart/GetCartProductsByUserID.service.js";
export default async function GetCartProductsByUserIDController(req, res) {
    const { UserID, PageSize, PageNumber } = req.body;
    try {
        const cartItems = await GetCartProductsByUserID(UserID, PageSize, PageNumber);
        return Ok(res, "Cart items fetched successfully", cartItems);
    } catch (err) {
        return ServerError(res, err.message);
    }
}