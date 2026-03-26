import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCarts from "../../../business/Cart/GetAllCarts.service.js";
export default async function GetAllCartsController(req, res) {
    try {
        const carts = await GetAllCarts();
        return Ok(res, "Carts fetched successfully", carts);
    } catch (err) {
        return ServerError(res, err.message);
    }
}