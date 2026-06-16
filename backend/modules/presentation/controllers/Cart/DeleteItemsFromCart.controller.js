import { Ok, ServerError, NotFound, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import DeleteItemsFromCart from "../../../business/Cart/DeleteItemsFromCart.service.js";
const deleteItemsFromCartSchema = {
    UserID: { type: "string", required: true },
};
export default async function DeleteItemsFromCartController(req, res) {
    const error = ValidateSchema(req.body, deleteItemsFromCartSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        const cart = await DeleteItemsFromCart({ UserID });
        if (!cart) {
            return NotFound(res, "Cart not found");
        }
        return Ok(res, "Cart items deleted successfully", cart);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
