import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import AddItemToCart from "../../../business/Cart/AddItemToCart.service.js";
const addItemToCartSchema = {
    UserID: { type: "string", required: true },
    ProductID: { type: "string", required: true },
    Quantity: { type: "number", required: true },
};
export default async function AddItemToCartController(req, res) {
    const error = ValidateSchema(req.body, addItemToCartSchema);
    if (error) return BadRequest(res, error);
    const { ProductID, Quantity, UserID } = req.body;
    try {
        const result = await AddItemToCart({ UserID, ProductID, Quantity });
        return Created(res, "Item added to cart successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
