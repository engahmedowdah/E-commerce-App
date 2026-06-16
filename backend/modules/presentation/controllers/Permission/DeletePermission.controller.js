import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeletePermission from "../../../business/Permission/DeletePermission.service.js";
const deleteSchema = {
    PermissionID: { type: "string", required: true },
  };
export default async function DeletePermissionController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { PermissionID } = req.body;
    try {
        const result = await DeletePermission({ PermissionID });
        if (!result) return NotFound(res, "Permission not found");
        return Ok(res, "Permission deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
