import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveUserByID from "../../../business/User/ActiveUserByID.service.js";
const activeSchema = {
    UserID: { type: "string", required: true },
  };
export default async function ActiveUserByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        const result = await ActiveUserByID({ UserID });
        if (!result) return NotFound(res, "User not found");
        return Ok(res, "User activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
