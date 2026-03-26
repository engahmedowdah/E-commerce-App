import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteUser from "../../../business/User/DeleteUser.service.js";
export default async function DeleteUserController(req, res) {
    const { UserID } = req.body;
    try {
        const result = await DeleteUser(UserID);
        if (!result) {
            return NotFound(res, "User not found");
        }
        return Ok(res, "User deleted successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}