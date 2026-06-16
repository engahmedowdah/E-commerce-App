import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetUserByID from "../../../business/User/GetUserByID.service.js";
const getByIDSchema = {
    UserID: { type: "string", required: true },
  };
export default async function GetUserByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        const result = await GetUserByID({ UserID });
        if (!result) return NotFound(res, "User not found");
        return Ok(res, "User fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
