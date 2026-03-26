import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveAdminByID from "../../../business/Admin/ActiveAdminByID.service.js";

export default async function ActiveAdminByIDController(req, res) {
  const { AdminID } = req.body;
  try {
    const admin = await ActiveAdminByID(AdminID);
    if (!admin) {
      return BadRequest(res, "Failed to activate admin or admin not found");
    }
    return Ok(res, "Admin activated successfully", admin);
  } catch (err) {
    return ServerError(res, err.message);
  }
}
