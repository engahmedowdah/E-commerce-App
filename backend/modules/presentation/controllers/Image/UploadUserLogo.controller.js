import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UploadImageByUserID from "../../../business/Image/UploadImageByUserID.service.js";
const uploadSchema = {
    UserID: { type: "string", required: true },
};
export default async function UploadUserLogoController(req, res) {
    const error = ValidateSchema(req.body, uploadSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        if (!req.file) {
            return BadRequest(res, "No file uploaded");
        }
        const { path, filename } = req.file;
        const image = await UploadImageByUserID({
            Path: path,
            Filename: filename,
            UserID: UserID,
        });
        return Created(res, "User logo uploaded successfully", image);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
