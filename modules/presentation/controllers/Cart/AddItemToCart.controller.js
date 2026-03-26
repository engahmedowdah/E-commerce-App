import { Created, BadRequest } from "../../../../shared/utils.js";
import AddItemToCart from "../../../business/Cart/AddItemToCart.service.js";
export default async function AddItemToCartController(req, res) {
    const { ProductID, Quantity, UserID } = req.body;
    const CreatedBy = UserID;
    if (!UserID || !ProductID || !Quantity) {
        return BadRequest(res, "UserID, ProductID and Quantity are required");
    }
    try {
        const result = await AddItemToCart({ UserID, ProductID, Quantity, CreatedBy });
        return Created(res, "Item added to cart successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}