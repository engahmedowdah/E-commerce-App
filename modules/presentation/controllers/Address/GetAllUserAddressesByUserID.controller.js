import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllUserAddressesByUserID from "../../../business/Address/GetAllUserAddressesByUserID.service.js";
export default async function GetAllUserAddressesByUserIDController(req, res) {
    const { UserID } = req.body;
    try {
        const addresses = await GetAllUserAddressesByUserID(UserID);
        if (!addresses) {
            return ServerError(res, "Failed to get addresses");
        }
        return Ok(res, "Addresses fetched successfully", addresses);
    } catch (err) {
        return ServerError(res, err.message);
    }
}