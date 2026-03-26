import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteImage from "../../../business/Image/DeleteImage.service.js";

export default async function DeleteImageController(req, res) {
  const { id } = req.body;
  try {
    const result = await DeleteImage(id);
    if (!result) {
      return NotFound(res, "Image not found");
    }
    return Ok(res, "Image deleted successfully", result);
  } catch (err) {
    return ServerError(res, err.message);
  }
}
