import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetRoleByID from "../../../business/Role/GetRoleByID.service.js";
const getByIDSchema = {
    RoleID: { type: "string", required: true },
  };
export default async function GetRoleByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { RoleID } = req.body;
    try {
        const result = await GetRoleByID({ RoleID });
        if (!result) return NotFound(res, "Role not found");
        return Ok(res, "Role fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
