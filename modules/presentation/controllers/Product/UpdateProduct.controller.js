import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateProduct from "../../../business/Product/UpdateProduct.service.js";
export default async function UpdateProductController(req, res) {
    const { CategoryID, CollectionID, Description, Images, IsActive, Name, Price, Stock, id } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const product = await UpdateProduct(id, { Name, Description, Price, Stock, CategoryID, CollectionID, Images, IsActive, UpdatedBy });
        if (!product) {
            return NotFound(res, "Product not found");
        }
        return Ok(res, "Product updated successfully", product);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
