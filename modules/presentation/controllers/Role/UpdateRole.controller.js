import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateRole from "../../../business/Role/UpdateRole.service.js";
export default async function UpdateRoleController(req, res) {
    const { Description, IsActive, Name, Permissions, id } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const result = await UpdateRole(id, { Name, Permissions, Description, IsActive, UpdatedBy });
        if (!result) {
            return NotFound(res, "Role not found");
        }
        return Ok(res, "Role updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
