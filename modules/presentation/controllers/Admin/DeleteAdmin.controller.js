import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import DeleteAdmin from "../../../business/Admin/DeleteAdmin.service.js";

export default async function DeleteAdminController(req, res) {
    const { AdminID } = req.body;
    try {
        const admin = await DeleteAdmin(AdminID);
        if (!admin) {
            return BadRequest(res, "Failed to delete admin or admin not found");
        }
        return Ok(res, "Admin deleted successfully", admin);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
