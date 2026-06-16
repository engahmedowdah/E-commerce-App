import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UploadImageByProductID from "../../../business/Image/UploadImageByProductID.service.js";
const uploadSchema = {
    ProductID: { type: "string", required: true },
};
export default async function UploadProductImageController(req, res) {
    const error = ValidateSchema(req.body, uploadSchema);
    if (error) return BadRequest(res, error);
    const { ProductID } = req.body;
    try {
        if (!req.file) {
            return BadRequest(res, "No file uploaded");
        }
        const { path, filename } = req.file;
        const image = await UploadImageByProductID({
            Path: path,
            Filename: filename,
            ProductID: ProductID,
        });
        return Created(res, "Product image uploaded successfully", image);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
