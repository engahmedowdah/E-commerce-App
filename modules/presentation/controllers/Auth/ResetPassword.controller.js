import { Ok, BadRequest } from "../../../../shared/utils.js";
import ResetPassword from "../../../business/Auth/ResetPassword.service.js";
export default async function ResetPasswordController(req, res) {
    const { Email, NewPassword, OldPassword } = req.body;
    try {
        const user = await ResetPassword({ Email, OldPassword, NewPassword });
        if (!user) {
            return BadRequest(res, "Failed to reset password");
        }
        return Ok(res, "Password reset successfully", user);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
