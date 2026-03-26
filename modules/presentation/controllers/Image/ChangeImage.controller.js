import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ChangeImage from "../../../business/Image/ChangeImage.service.js";

export default async function ChangeImageController(req, res) {
    const { OldImageID } = req.body;
    try {
        if (!req.file) {
            return BadRequest(res, "No new file uploaded");
        }

        const CreatedBy = req.body.AdminId;
        const newImage = await ChangeImage({
            OldImageID: OldImageID,
            NewFileData: req.file,
            CreatedBy: CreatedBy
        });

        return Ok(res, "Image replaced successfully", newImage);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
