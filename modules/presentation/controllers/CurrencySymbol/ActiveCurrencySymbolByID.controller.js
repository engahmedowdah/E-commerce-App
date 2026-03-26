import { BadRequest, ServerError, Ok } from "../../../../shared/utils.js";
import ActiveCurrencySymbolByID from "../../../business/CurrencySymbol/ActiveCurrencySymbolByID.service.js";

export default async function ActiveCurrencySymbolByIDController(req, res) {
    const { CurrencySymbolID } = req.body;
    const UpdatedBy = req.body.AdminId || req.body.AdminID;

    try {
        const updatedCurrencySymbol = await ActiveCurrencySymbolByID({ CurrencySymbolID, UpdatedBy });
        return Ok(res, "Currency symbol activation toggled successfully", updatedCurrencySymbol);
    } catch (err) {
        const errorContext = { CurrencySymbolID, UpdatedBy };
        const errorMessage = typeof err === "string" ? err : err.message;
        
        if (err.name === 'ValidationError' || err.name === 'CastError' || errorMessage.includes("required") || errorMessage.includes("Invalid") || errorMessage.includes("not found")) {
            return BadRequest(res, errorMessage, errorContext);
        }
        return ServerError(res, errorMessage, errorContext);
    }
}
