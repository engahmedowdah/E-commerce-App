import { Unauthorized, BadRequest, generateAccessToken, generateRefreshToken, ValidateSchema } from "../../../../shared/utils.js";
import Login from "../../../business/Auth/Login.service.js";
import RefreshToken from "../../../data/RefreshToken/RefreshToken.model.js";
const loginSchema = {
    Email: { type: "string", required: true },
    Password: { type: "string", required: true },
};
export default async function LoginController(req, res) {
    const Email = req.body.Email || req.body.email || req.body.username;
    const Password = req.body.Password || req.body.password;
    const normalizedBody = { Email, Password };
    const error = ValidateSchema(normalizedBody, loginSchema);
    if (error) return BadRequest(res, error);
    try {
        const user = await Login({ Email, Password });
        if (!user) {
            return Unauthorized(res, "Invalid credentials");
        }
        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        await RefreshToken.create({
            UserID: user._id,
            token: refreshToken,
            ExpiresAt: expiresAt,
        });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({
            access_token: accessToken,
            token_type: "Bearer",
            success: true,
            data: user,
        });
    } catch (err) {
        return Unauthorized(res, err.message);
    }
}
