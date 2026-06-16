import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPermissions from "../../../business/Permission/GetAllPermissions.service.js";
export default async function GetAllPermissionsController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllPermissions({ page, limit, sort });
        return Ok(res, "Permissions fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
