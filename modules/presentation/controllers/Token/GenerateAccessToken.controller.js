import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import GenerateAccessToken from "../../../business/Token/GenerateAccessToken.service.js";

export default async function GenerateAccessTokenController(req, res) {
    const { UserID } = req.body;
    try {
        const token = GenerateAccessToken(UserID);
        return Ok(res, "Access token generated successfully", { token });
    } catch (err) {
        return ServerError(res, err.message);
    }
}
