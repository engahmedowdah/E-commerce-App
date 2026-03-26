import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllAdmins from "../../../business/Admin/GetAllAdmins.service.js";

export default async function GetAllAdminsController(req, res) {
    try {
        const admins = await GetAllAdmins();
        return Ok(res, "Admins fetched successfully", admins);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
