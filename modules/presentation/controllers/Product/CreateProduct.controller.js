import { Created, BadRequest } from "../../../../shared/utils.js";
import CreateProduct from "../../../business/Product/CreateProduct.service.js";
export default async function CreateProductController(req, res) {
    const { CategoryID, CollectionID, Description, IsActive, Name, Price, Stock } = req.body;

    const Images = req.files ? req.files.map(file => file.path) : req.body.Images;

    if (!Name || Price === undefined || Stock === undefined || !CategoryID) {
        return BadRequest(res, "Name, Price, Stock, and CategoryID are required");
    }
    try {
        const CreatedBy = req.body.AdminId;
        const product = await CreateProduct({
            Name,
            Description,
            Price: Number(Price),
            Stock: Number(Stock),
            CategoryID,
            CollectionID,
            Images,
            IsActive,
            CreatedBy
        });
        return Created(res, "Product created successfully", product);
    } catch (err) {
        return BadRequest(res, err.message);
    }
}