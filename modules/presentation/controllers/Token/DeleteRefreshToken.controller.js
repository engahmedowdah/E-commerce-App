import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import DeleteRefreshToken from "../../../business/Token/DeleteRefreshToken.service.js";

export default async function DeleteRefreshTokenController(req, res) {
    const { Token } = req.body;
    try {
        await DeleteRefreshToken(Token);
        return Ok(res, "Refresh token deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}
