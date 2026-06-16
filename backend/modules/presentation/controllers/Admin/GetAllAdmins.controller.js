import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllAdmins from "../../../business/Admin/GetAllAdmins.service.js";
export default async function GetAllAdminsController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllAdmins({ page, limit, sort });
        return Ok(res, "Admins fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
