import { Ok, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ChangeImage from "../../../business/Image/ChangeImage.service.js";
const changeImageSchema = {
    OldImageID: { type: "string", required: true },
};
export default async function ChangeImageController(req, res) {
    const error = ValidateSchema(req.body, changeImageSchema);
    if (error) return BadRequest(res, error);
    const { OldImageID } = req.body;
    try {
        if (!req.file) {
            return BadRequest(res, "No new file uploaded");
        }
        const newImage = await ChangeImage({
            OldImageID: OldImageID,
            NewFileData: req.file,
        });
        return Ok(res, "Image replaced successfully", newImage);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
