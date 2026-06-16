import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveRoleByID from "../../../business/Role/ActiveRoleByID.service.js";
const activeSchema = {
    RoleID: { type: "string", required: true },
  };
export default async function ActiveRoleByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { RoleID } = req.body;
    try {
        const result = await ActiveRoleByID({ RoleID });
        if (!result) return NotFound(res, "Role not found");
        return Ok(res, "Role activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
