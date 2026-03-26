import { BadRequest, ServerError, Ok } from "../../../../shared/utils.js";
import UpdateCurrencySymbol from "../../../business/CurrencySymbol/UpdateCurrencySymbol.service.js";

export default async function UpdateCurrencySymbolController(req, res) {
    const { CurrencySymbolID, CountryID, CurrencySymbol } = req.body;
    const UpdatedBy = req.body.AdminId || req.body.AdminID;

    try {
        const updatedCurrencySymbol = await UpdateCurrencySymbol({ CurrencySymbolID, CountryID, CurrencySymbol, UpdatedBy });
        return Ok(res, "Currency symbol updated successfully", updatedCurrencySymbol);
    } catch (err) {
        const errorContext = { CurrencySymbolID, CountryID, CurrencySymbol, UpdatedBy };
        const errorMessage = typeof err === "string" ? err : err.message;

        if (err.name === 'ValidationError' || err.name === 'CastError' || errorMessage.includes("required") || errorMessage.includes("Invalid") || errorMessage.includes("not found")) {
            return BadRequest(res, errorMessage, errorContext);
        }
        return ServerError(res, errorMessage, errorContext);
    }
}
