import { Ok, ServerError, BadRequest, NotFound, ValidateSchema } from "../../../../shared/utils.js";
import UpdateItemQuantity from "../../../business/Cart/UpdateItemQuantity.service.js";
const updateItemQuantitySchema = {
    UserID: { type: "string", required: true },
    ProductID: { type: "string", required: true },
    Quantity: { type: "number", required: true },
};
export default async function UpdateItemQuantityController(req, res) {
    const error = ValidateSchema(req.body, updateItemQuantitySchema);
    if (error) return BadRequest(res, error);
    const { ProductID, Quantity, UserID } = req.body;
    try {
        const result = await UpdateItemQuantity({ UserID, ProductID, Quantity });
        if (!result) {
            return NotFound(res, "Item not found in cart");
        }
        return Ok(res, "Cart item updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
