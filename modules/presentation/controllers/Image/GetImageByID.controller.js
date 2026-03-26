import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetImageByID from "../../../business/Image/GetImageByID.service.js";

export default async function GetImageByIDController(req, res) {
    const { ImageID } = req.body;
    try {
        const image = await GetImageByID(ImageID);
        if (!image) {
            return NotFound(res, "Image not found");
        }
        return Ok(res, "Image retrieved successfully", image);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
