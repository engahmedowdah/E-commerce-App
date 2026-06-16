import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import Register from "../../../business/Auth/Register.service.js";
const registerSchema = {
    Email: { type: "string", required: true },
    FirstName: { type: "string", required: true },
    LastName: { type: "string", required: true },
    Phone: { type: "string", required: true },
    Password: { type: "string", required: true },
    ConfirmPassword: { type: "string", required: true },
};
export default async function RegisterController(req, res) {
    const error = ValidateSchema(req.body, registerSchema);
    if (error) return BadRequest(res, error);
    try {
        const { Email, FirstName, LastName, Phone, Password, ConfirmPassword } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            return BadRequest(res, "Invalid email format");
        }
        if (Password !== ConfirmPassword) {
            return BadRequest(res, "Passwords do not match");
        }
        const user = await Register({ FirstName, LastName, Email, Phone, Password });
        if (!user) {
            return BadRequest(res, "Failed to register user");
        }
        return Created(res, "User registered successfully", user);
    } catch (err) {
        if (err.message === "Email is already registered") {
            return BadRequest(res, err.message);
        }
        return ServerError(res, err.message);
    }
}
