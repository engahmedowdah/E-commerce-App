import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateUser from "../../../business/User/UpdateUser.service.js";
const updateSchema = {
    UserID: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
    Image: { type: "file", required: false },
    Email: { type: "string", required: false },
    FirstName: { type: "string", required: false },
    LastName: { type: "string", required: false },
    Password: { type: "string", required: false },
    ConfirmPassword: { type: "string", required: false },
    Phone: { type: "string", required: false },
};
export default async function UpdateUserController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    try {
        const { UserID, IsActivated, Email, FirstName, LastName, Password, ConfirmPassword, Phone } = req.body;
        if (Email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(Email)) {
                return BadRequest(res, "Invalid email format");
            }
        }
        if (Password && ConfirmPassword && Password !== ConfirmPassword) {
            return BadRequest(res, "Passwords do not match");
        }
        const result = await UpdateUser({ UserID, IsActivated, Email, FirstName, LastName, Password, Phone });
        if (!result) return NotFound(res, "User not found");
        return Ok(res, "User updated successfully", result);
    } catch (err) {
        if (err.message === "Email is already registered") {
            return BadRequest(res, err.message);
        }
        return ServerError(res, "Something went wrong");
    }
}
