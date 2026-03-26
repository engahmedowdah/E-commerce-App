import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveUserByID from "../../../business/User/ActiveUserByID.service.js";

export default async function ActiveUserByIDController(req, res) {
    const { UserID } = req.body;
    try {
        const user = await ActiveUserByID(UserID);
        if (!user) {
            return BadRequest(res, "Failed to activate user or user not found");
        }
        return Ok(res, "User activated successfully", user);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
