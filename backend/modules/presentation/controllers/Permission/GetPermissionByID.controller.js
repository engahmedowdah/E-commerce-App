import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetPermissionByID from "../../../business/Permission/GetPermissionByID.service.js";
const getByIDSchema = {
    PermissionID: { type: "string", required: true },
  };
export default async function GetPermissionByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { PermissionID } = req.body;
    try {
        const result = await GetPermissionByID({ PermissionID });
        if (!result) return NotFound(res, "Permission not found");
        return Ok(res, "Permission fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
