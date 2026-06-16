import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveAdminByID from "../../../business/Admin/ActiveAdminByID.service.js";
const activeSchema = {
    AdminID: { type: "string", required: true },
};
export default async function ActiveAdminByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { AdminID } = req.body;
    try {
        const result = await ActiveAdminByID({ AdminID });
        if (!result) return NotFound(res, "Admin not found");
        return Ok(res, "Admin activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
