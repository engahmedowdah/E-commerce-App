import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveRoleByID from "../../../business/Role/ActiveRoleByID.service.js";

export default async function ActiveRoleByIDController(req, res) {
    const { RoleID } = req.body;
    try {
        const role = await ActiveRoleByID(RoleID);
        if (!role) {
            return BadRequest(res, "Failed to activate role or role not found");
        }
        return Ok(res, "Role activated successfully", role);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
