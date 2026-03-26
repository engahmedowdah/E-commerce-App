import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllProducts from "../../../business/Product/GetAllProducts.service.js";
export default async function GetAllProductsController(req, res) {
    try {
        const Products = await GetAllProducts();
        return Ok(res, "Products fetched successfully", Products);
    } catch (err) {
        return ServerError(res, err.message);
    }
}