import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllUsers from "../../../business/User/GetAllUsers.service.js";
export default async function GetAllUsersController(req, res) {
    try {
        const Users = await GetAllUsers();
        return Ok(res, "Users fetched successfully", Users);
    } catch (err) {
        return ServerError(res, err.message);
    }
}