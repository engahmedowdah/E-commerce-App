import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetOrderByID from "../../../business/Order/GetOrderByID.service.js";
const getByIDSchema = {
    OrderID: { type: "string", required: true },
};
export default async function GetOrderByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    try {
        const { OrderID } = req.body;
        const result = await GetOrderByID({ OrderID });
        if (!result) return NotFound(res, "Order not found");
        return Ok(res, "Order fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
