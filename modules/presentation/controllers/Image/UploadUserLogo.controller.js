import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import UploadImageByUserID from "../../../business/Image/UploadImageByUserID.service.js";

export default async function UploadUserLogoController(req, res) {
    const { userId } = req.body;
    try {
        if (!req.file) {
            return BadRequest(res, "No file uploaded");
        }

        const { path, filename } = req.file;
        const CreatedBy = req.body.AdminId || userId;

        const image = await UploadImageByUserID({
            path,
            filename,
            userID: userId,
            CreatedBy
        });

        return Created(res, "User logo uploaded successfully", image);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
