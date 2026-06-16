import { Ok, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ResetPassword from "../../../business/Auth/ResetPassword.service.js";
const resetPasswordSchema = {
    Email: { type: "string", required: true },
    NewPassword: { type: "string", required: true },
    OldPassword: { type: "string", required: true },
};
export default async function ResetPasswordController(req, res) {
    const error = ValidateSchema(req.body, resetPasswordSchema);
    if (error) return BadRequest(res, error);
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
