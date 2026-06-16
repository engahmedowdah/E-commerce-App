import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteAdmin from "../../../business/Admin/DeleteAdmin.service.js";
const deleteSchema = {
    AdminID: { type: "string", required: true },
  };
export default async function DeleteAdminController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { AdminID } = req.body;
    try {
        const result = await DeleteAdmin({ AdminID });
        if (!result) return NotFound(res, "Admin not found");
        return Ok(res, "Admin deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
