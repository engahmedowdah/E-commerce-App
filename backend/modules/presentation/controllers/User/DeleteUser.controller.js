import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteUser from "../../../business/User/DeleteUser.service.js";
const deleteSchema = {
    UserID: { type: "string", required: true },
  };
export default async function DeleteUserController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        const result = await DeleteUser({ UserID });
        if (!result) return NotFound(res, "User not found");
        return Ok(res, "User deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
