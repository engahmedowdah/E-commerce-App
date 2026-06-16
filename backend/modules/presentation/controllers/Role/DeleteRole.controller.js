import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteRole from "../../../business/Role/DeleteRole.service.js";
const deleteSchema = {
    RoleID: { type: "string", required: true },
  };
export default async function DeleteRoleController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { RoleID } = req.body;
    try {
        const result = await DeleteRole({ RoleID });
        if (!result) return NotFound(res, "Role not found");
        return Ok(res, "Role deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
