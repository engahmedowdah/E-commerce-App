import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import SaveRefreshToken from "../../../business/Token/SaveRefreshToken.service.js";

export default async function SaveRefreshTokenController(req, res) {
    const { UserID, Token, ExpiresAt } = req.body;
    try {
        const CreatedBy = req.body.AdminId || UserID;
        const result = await SaveRefreshToken({ UserID, Token, ExpiresAt, CreatedBy });
        return Created(res, "Refresh token saved successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
