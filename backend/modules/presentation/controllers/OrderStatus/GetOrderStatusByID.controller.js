import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetOrderStatusByID from "../../../business/OrderStatus/GetOrderStatusByID.service.js";
const getByIDSchema = {
    OrderStatusID: { type: "string", required: true },
  };
export default async function GetOrderStatusByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { OrderStatusID } = req.body;
    try {
        const result = await GetOrderStatusByID({ OrderStatusID });
        if (!result) return NotFound(res, "OrderStatus not found");
        return Ok(res, "OrderStatus fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
