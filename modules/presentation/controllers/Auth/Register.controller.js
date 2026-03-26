import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import Register from "../../../business/Auth/Register.service.js";
export default async function RegisterController(req, res) {
    const { Email, FirstName, LastName, Password, ConfirmPassword } = req.body;
    try {
        if (Password !== ConfirmPassword) {
            return BadRequest(res, "Passwords do not match");
        }
        const user = await Register({ FirstName, LastName, Email, Password });
        if (!user) {
            return BadRequest(res, "Failed to register user");
        }
        return Created(res, "User registered successfully", user);
    } catch (err) {
        return ServerError(res, err.message);
    }
}   
