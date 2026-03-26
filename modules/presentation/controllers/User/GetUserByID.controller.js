import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetUserByID from "../../../business/User/GetUserByID.service.js";
export default async function GetUserByIDController(req, res) {
    const { UserID } = req.body;
    try {
        const result = await GetUserByID(UserID);
        if (!result) {
            return NotFound(res, "User not found");
        }
        return Ok(res, "User fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}