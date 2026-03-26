import { BadRequest, ServerError, Ok } from "../../../../shared/utils.js";
import GetCurrencySymbolByID from "../../../business/CurrencySymbol/GetCurrencySymbolByID.service.js";

export default async function GetCurrencySymbolByIDController(req, res) {
    const { CurrencySymbolID } = req.body;
    const { IncludeDeleted } = req.body;

    try {
        const currencySymbol = await GetCurrencySymbolByID({ CurrencySymbolID, IncludeDeleted });
        return Ok(res, "Currency symbol fetched successfully", currencySymbol);
    } catch (err) {
        const errorContext = { CurrencySymbolID, IncludeDeleted };
        const errorMessage = typeof err === "string" ? err : err.message;

        if (err.name === 'ValidationError' || err.name === 'CastError' || errorMessage.includes("required") || errorMessage.includes("Invalid") || errorMessage.includes("not found")) {
            return BadRequest(res, errorMessage, errorContext);
        }
        return ServerError(res, errorMessage, errorContext);
    }
}
