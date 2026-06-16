import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetImageByID from "../../../business/Image/GetImageByID.service.js";
const getByIDSchema = {
    ImageID: { type: "string", required: true },
  };
export default async function GetImageByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { ImageID } = req.body;
    try {
        const result = await GetImageByID({ ImageID });
        if (!result) return NotFound(res, "Image not found");
        return Ok(res, "Image fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
