import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetAdminByID from "../../../business/Admin/GetAdminByID.service.js";

export default async function GetAdminByIDController(req, res) {
    const { AdminID } = req.body;
    try {
        const admin = await GetAdminByID({ AdminID });
        if (!admin) {
            return NotFound(res, "Admin not found");
        }
        return Ok(res, "Admin fetched successfully", admin);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
