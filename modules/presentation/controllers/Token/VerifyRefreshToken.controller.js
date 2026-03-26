import { Ok, Unauthorized, ServerError } from "../../../../shared/utils.js";
import VerifyRefreshToken from "../../../business/Token/VerifyRefreshToken.service.js";

export default async function VerifyRefreshTokenController(req, res) {
    const { Token } = req.body;
    try {
        const payload = VerifyRefreshToken(Token);
        if (!payload) {
            return Unauthorized(res, "Invalid or expired refresh token");
        }
        return Ok(res, "Refresh token is valid", payload);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
