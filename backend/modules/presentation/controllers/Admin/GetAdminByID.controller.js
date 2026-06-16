import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetAdminByID from "../../../business/Admin/GetAdminByID.service.js";
const getByIDSchema = {
    AdminID: { type: "string", required: true },
};
export default async function GetAdminByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { AdminID } = req.body;
    try {
        const result = await GetAdminByID({ AdminID });
        if (!result) return NotFound(res, "Admin not found");
        return Ok(res, "Admin fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
