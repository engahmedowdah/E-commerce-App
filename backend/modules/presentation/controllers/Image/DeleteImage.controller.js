import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteImage from "../../../business/Image/DeleteImage.service.js";
const deleteSchema = {
    ImageID: { type: "string", required: true },
  };
export default async function DeleteImageController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { ImageID } = req.body;
    try {
        const result = await DeleteImage({ ImageID });
        if (!result) return NotFound(res, "Image not found");
        return Ok(res, "Image deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
