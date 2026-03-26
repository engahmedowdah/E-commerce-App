import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteRole from "../../../business/Role/DeleteRole.service.js";
export default async function DeleteRoleController(req, res) {
    const { RoleID } = req.body;
    try {
        const result = await DeleteRole(RoleID);
        if (!result) {
            return NotFound(res, "Role not found");
        }
        return NoContent(res, "Role deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}
