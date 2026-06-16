import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdatePermission from "../../../business/Permission/UpdatePermission.service.js";
const updateSchema = {
      PermissionID: { type: "string", required: true },
      Name: { type: "string", required: false },
      Description: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdatePermissionController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { PermissionID, Name, Description, IsActivated } = req.body;
    try {
        const result = await UpdatePermission({ PermissionID, Name, Description, IsActivated });
        if (!result) return NotFound(res, "Permission not found");
        return Ok(res, "Permission updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
