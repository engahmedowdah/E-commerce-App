import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetRoleByID from "../../../business/Role/GetRoleByID.service.js";
export default async function GetRoleByIDController(req, res) {
    const { RoleID } = req.body;
    try {
        const result = await GetRoleByID(RoleID);
        if (!result) {
            return NotFound(res, "Role not found");
        }
        return Ok(res, "Role fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
