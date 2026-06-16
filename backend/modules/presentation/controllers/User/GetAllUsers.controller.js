import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllUsers from "../../../business/User/GetAllUsers.service.js";
export default async function GetAllUsersController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllUsers({ page, limit, sort });
        return Ok(res, "Users fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
