import { Ok, ServerError, NotFound, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import DeleteItemFromCart from "../../../business/Cart/DeleteItemFromCart.service.js";
const deleteItemFromCartSchema = {
    UserID: { type: "string", required: true },
    ProductID: { type: "string", required: true },
};
export default async function DeleteItemFromCartController(req, res) {
    const error = ValidateSchema(req.body, deleteItemFromCartSchema);
    if (error) return BadRequest(res, error);
    try {
        const { UserID, ProductID } = req.body;
        const cart = await DeleteItemFromCart({ UserID, ProductID });
        if (!cart) {
            return NotFound(res, "Cart not found");
        }
        return Ok(res, "Cart item removed successfully", cart);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
