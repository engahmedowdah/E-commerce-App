import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActivePermissionByID from "../../../business/Permission/ActivePermissionByID.service.js";
const activeSchema = {
    PermissionID: { type: "string", required: true },
  };
export default async function ActivePermissionByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { PermissionID } = req.body;
    try {
        const result = await ActivePermissionByID({ PermissionID });
        if (!result) return NotFound(res, "Permission not found");
        return Ok(res, "Permission activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
