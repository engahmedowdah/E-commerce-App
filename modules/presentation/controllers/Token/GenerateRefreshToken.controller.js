import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import GenerateRefreshToken from "../../../business/Token/GenerateRefreshToken.service.js";

export default async function GenerateRefreshTokenController(req, res) {
    const { UserID } = req.body;
    try {
        const token = GenerateRefreshToken(UserID);
        return Ok(res, "Refresh token generated successfully", { token });
    } catch (err) {
        return ServerError(res, err.message);
    }
}
