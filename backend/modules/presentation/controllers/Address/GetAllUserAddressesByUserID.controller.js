import { Ok, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetAllUserAddressesByUserID from "../../../business/Address/GetAllUserAddressesByUserID.service.js";
const getAllUserAddressesByUserIDSchema = {
    UserID: { type: "string", required: true },
};
export default async function GetAllUserAddressesByUserIDController(req, res) {
    const { page, limit, sort } = req.query;
    const error = ValidateSchema(req.body, getAllUserAddressesByUserIDSchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    try {
        const addresses = await GetAllUserAddressesByUserID({ UserID, page, limit, sort });
        if (!addresses) {
            return ServerError(res, "Failed to get addresses");
        }
        return Ok(res, "Addresses fetched successfully", addresses);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
