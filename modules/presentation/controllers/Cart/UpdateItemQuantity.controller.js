import { Ok, ServerError, BadRequest, NotFound } from "../../../../shared/utils.js";
import UpdateItemQuantity from "../../../business/Cart/UpdateItemQuantity.service.js";
export default async function UpdateItemQuantityController(req, res) {
    const { ProductID, Quantity, UserID } = req.body;
    if (Quantity === undefined) {
        return BadRequest(res, "Quantity is required");
    }
    try {
        const UpdatedBy = req.body.UserId;
        const result = await UpdateItemQuantity(UserID, ProductID, Quantity, UpdatedBy);
        if (!result) {
            return NotFound(res, "Item not found in cart");
        }
        return Ok(res, "Cart item updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}