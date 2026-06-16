import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateProduct from "../../../business/Product/UpdateProduct.service.js";
const updateSchema = {
      ProductID: { type: "string", required: true },
      Name: { type: "string", required: false },
      Description: { type: "string", required: false },
      Price: { type: "number", required: false },
      Stock: { type: "number", required: false },
      CategoryIDs: { type: "array", required: false },
      SubCategoryIDs: { type: "array", required: false },
      CollectionIDs: { type: "array", required: false },
      ImageIDs: { type: "array", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateProductController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { ProductID, Name, Description, Price, Stock, CategoryIDs, SubCategoryIDs, CollectionIDs, ImageIDs, IsActivated } = req.body;
    try {
        const result = await UpdateProduct({ ProductID, Name, Description, Price, Stock, CategoryIDs, SubCategoryIDs, CollectionIDs, ImageIDs, IsActivated });
        if (!result) return NotFound(res, "Product not found");
        return Ok(res, "Product updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
