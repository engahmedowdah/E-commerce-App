import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateAdmin from "../../../business/Admin/UpdateAdmin.service.js";
const updateSchema = {
      AdminID: { type: "string", required: true },
      FirstName: { type: "string", required: false },
      LastName: { type: "string", required: false },
      Email: { type: "string", required: false },
      Phone: { type: "string", required: false },
      UserName: { type: "string", required: false },
      Password: { type: "string", required: false },
      ConfirmPassword: { type: "string", required: false },
      RoleID: { type: "string", required: false },
      ImageID: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateAdminController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { AdminID, FirstName, LastName, Email, Phone, UserName, Password, ConfirmPassword, RoleID, ImageID, IsActivated } = req.body;
    if (Password && ConfirmPassword && Password !== ConfirmPassword) {
      return BadRequest(res, "Passwords do not match");
    }
    try {
        const result = await UpdateAdmin({ AdminID, FirstName, LastName, Email, Phone, UserName, Password, RoleID, ImageID, IsActivated });
        if (!result) return NotFound(res, "Admin not found");
        return Ok(res, "Admin updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message || "Something went wrong");
    }
}
