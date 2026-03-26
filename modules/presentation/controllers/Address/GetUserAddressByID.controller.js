import { Ok, ServerError } from "../../../../shared/utils.js";
import GetUserAddressByID from "../../../business/Address/GetUserAddressByID.service.js";
export default async function GetUserAddressByIDController(req, res) {
    const { AddressID, UserID } = req.body;
    try {
        const address = await GetUserAddressByID(UserID, AddressID);
        if (!address) {
            return ServerError(res, "Failed to get address");
        }
        return Ok(res, "Address fetched successfully", address);
    } catch (err) {
        return ServerError(res, err.message);
    }
}