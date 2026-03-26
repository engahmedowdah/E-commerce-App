import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateUser from "../../../business/User/UpdateUser.service.js";
export default async function UpdateUserController(req, res) {
    const { Email, FirstName, LastName, UserID } = req.body;
    try {
        const UpdatedBy = req.body.UserId;
        const result = await UpdateUser(UserID, { FirstName, LastName, Email, UpdatedBy });
        if (!result) {
            return NotFound(res, "User not found");
        }
        return Ok(res, "User updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}