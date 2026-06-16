import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateRole from "../../../business/Role/UpdateRole.service.js";
const updateSchema = {
      RoleID: { type: "string", required: true },
      Name: { type: "string", required: false },
      Permissions: { type: "array", required: false },
      Description: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateRoleController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { RoleID, Name, Permissions, Description, IsActivated } = req.body;
    try {
        const result = await UpdateRole({ RoleID, Name, Permissions, Description, IsActivated });
        if (!result) return NotFound(res, "Role not found");
        return Ok(res, "Role updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
