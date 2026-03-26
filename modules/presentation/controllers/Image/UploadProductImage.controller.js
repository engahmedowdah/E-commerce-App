import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import UploadImageByProductID from "../../../business/Image/UploadImageByProductID.service.js";

export default async function UploadProductImageController(req, res) {
    const { productId } = req.body;
    try {
        if (!req.file) {
            return BadRequest(res, "No file uploaded");
        }

        const { path, filename } = req.file;
        const CreatedBy = req.body.AdminId;

        const image = await UploadImageByProductID({
            path,
            filename,
            productID: productId,
            CreatedBy
        });

        return Created(res, "Product image uploaded successfully", image);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
