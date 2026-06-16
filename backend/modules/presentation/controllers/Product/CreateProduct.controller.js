import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateProduct from "../../../business/Product/CreateProduct.service.js";
const createSchema = {
    CategoryIDs: { type: "array", required: true },
    SubCategoryIDs: { type: "array", required: true },
    CollectionIDs: { type: "array", required: false },
    ImageIDs: { type: "array", required: false },
    Name: { type: "string", required: true },
    Description: { type: "string", required: false },
    IsActivated: { type: "boolean", required: false },
    Price: { type: "number", required: true },
    Stock: { type: "number", required: true },
};
export default async function CreateProductController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { CategoryIDs, SubCategoryIDs, CollectionIDs, Name, Description, IsActivated, Price, Stock } = req.body;
    const ImageIDs = req.files ? req.files.map(file => file.path) : req.body.ImageIDs;
    try {
        const product = await CreateProduct({
            CategoryIDs: CategoryIDs,
            SubCategoryIDs: SubCategoryIDs,
            CollectionIDs: CollectionIDs,
            ImageIDs: ImageIDs,
            Name,
            Description,
            IsActivated,
            Price: Number(Price),
            Stock: Number(Stock),
        });
        if (!product) {
            return BadRequest(res, "Failed to create product");
        }
        return Created(res, "Product created successfully", product);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
