import { Ok, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GenerateRefreshToken from "../../../business/Token/RefreshAccessToken.service.js";
const refreshSchema = {
    UserID: { type: "string", required: true },
};
export default async function RefreshAccessTokenController(req, res) {
    const error = ValidateSchema(req.body, refreshSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        const token = await GenerateRefreshToken({ UserID });
        return Ok(res, "Access token refreshed successfully", { token });
    } catch (err) {
        return ServerError(res, err.message);
    }
}
