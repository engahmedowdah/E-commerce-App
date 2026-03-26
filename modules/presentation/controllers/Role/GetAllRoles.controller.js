import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllRoles from "../../../business/Role/GetAllRoles.service.js";
export default async function GetAllRolesController(req, res) {
    try {
        const Roles = await GetAllRoles();
        return Ok(res, "Roles fetched successfully", Roles);
    } catch (err) {
        return ServerError(res, err.message);
    }
}