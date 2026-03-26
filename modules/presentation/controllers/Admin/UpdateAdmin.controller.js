import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateAdmin from "../../../business/Admin/UpdateAdmin.service.js";

export default async function UpdateAdminController(req, res) {
    const { AdminID, FirstName, LastName, Email, RoleID } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const admin = await UpdateAdmin(AdminID, { FirstName, LastName, Email, RoleID, UpdatedBy });
        if (!admin) {
            return NotFound(res, "Admin not found");
        }
        return Ok(res, "Admin updated successfully", admin);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
