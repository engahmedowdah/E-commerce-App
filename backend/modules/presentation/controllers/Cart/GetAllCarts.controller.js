import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCarts from "../../../business/Cart/GetAllCarts.service.js";
export default async function GetAllCartsController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const carts = await GetAllCarts({ page, limit, sort });
        return Ok(res, "Carts fetched successfully", carts);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
