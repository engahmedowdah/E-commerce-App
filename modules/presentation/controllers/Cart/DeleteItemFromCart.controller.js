import { Ok, ServerError, NotFound } from "../../../../shared/utils.js";
import DeleteItemFromCart from "../../../business/Cart/DeleteItemFromCart.service.js";
export default async function RemoveItemFromCartController(req, res) {
    const { ProductID, UserID } = req.body;
    try {
        const cart = await DeleteItemFromCart(UserID, ProductID);
        if (!cart) {
            return NotFound(res, "Cart not found");
        }
        return Ok(res, "Cart item removed successfully", cart);
    } catch (err) {
        return ServerError(res, err.message);
    }
}