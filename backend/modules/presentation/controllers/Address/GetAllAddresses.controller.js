import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllAddresses from "../../../business/Address/GetAllAddresses.service.js";
export default async function GetAllAddressesController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllAddresses({ page, limit, sort });
        return Ok(res, "Addresses fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
