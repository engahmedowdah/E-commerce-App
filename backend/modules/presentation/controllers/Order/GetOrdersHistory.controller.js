import { Ok, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetOrdersHistory from "../../../business/Order/GetOrdersHistory.service.js";
const getOrdersHistorySchema = {
    UserID: { type: "string", required: true },
};
export default async function GetOrdersHistoryController(req, res) {
    const error = ValidateSchema(req.body, getOrdersHistorySchema);
    if (error) return BadRequest(res, error);
    const { UserID } = req.body;
    const { page = 1, limit = 10, sort = "newest" } = req.query;
    try {
        const result = await GetOrdersHistory({ UserID, page, limit, sort });
        return Ok(res, "Orders history fetched successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
