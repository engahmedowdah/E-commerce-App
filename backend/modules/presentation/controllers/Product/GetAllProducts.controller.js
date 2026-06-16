import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllProducts from "../../../business/Product/GetAllProducts.service.js";
export default async function GetAllProductsController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllProducts({ page, limit, sort });
        return Ok(res, "Products fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
