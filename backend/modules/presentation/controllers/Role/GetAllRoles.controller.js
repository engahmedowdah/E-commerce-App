import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllRoles from "../../../business/Role/GetAllRoles.service.js";
export default async function GetAllRolesController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllRoles({ page, limit, sort });
        return Ok(res, "Roles fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
