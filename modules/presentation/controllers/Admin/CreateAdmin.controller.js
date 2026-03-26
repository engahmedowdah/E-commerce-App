import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateAdmin from "../../../business/Admin/CreateAdmin.service.js";

export default async function CreateAdminController(req, res) {
  const { FirstName, LastName, Email, Password, RoleID, UserID } = req.body;
  try {
    const CreatedBy = req.body.AdminId;
    const admin = await CreateAdmin({
      FirstName,
      LastName,
      Email,
      Password,
      RoleID,
      CreatedBy,
      UserID,
    });
    if (!admin) {
      return BadRequest(res, "Failed to create admin");
    }
    return Created(res, "Admin created successfully", admin);
  } catch (err) {
    return ServerError(res, err.message);
  }
}
