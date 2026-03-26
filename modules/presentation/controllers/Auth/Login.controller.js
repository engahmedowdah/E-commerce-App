import { Ok, Unauthorized, BadRequest } from "../../../../shared/utils.js";
import Login from "../../../business/Auth/Login.service.js";
export default async function LoginController(req, res) {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
        return BadRequest(res, "Email and Password are required");
    }
    try {
        const user = await Login({ Email, Password });
        if (!user) {
            return Unauthorized(res, "Invalid credentials");
        }
        return Ok(res, "User logged in successfully", user);
    } catch (err) {
        return Unauthorized(res, err.message);
    }
}
