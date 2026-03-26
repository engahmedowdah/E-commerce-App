import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateRole from "../../../business/Role/CreateRole.service.js";
export default async function CreateRoleController(req, res) {
    const { Description, IsActive, Name, Permissions } = req.body;
    if (!Name) {
        return BadRequest(res, "Name is required for role creation");
    }
    if (!Permissions || !Array.isArray(Permissions)) {
        return BadRequest(res, "Permissions are required and must be an array");
    }
    try {
        const CreatedBy = req.body.AdminId;
        const result = await CreateRole({ Name, Permissions, Description, IsActive, CreatedBy });
        return Created(res, "Role created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}