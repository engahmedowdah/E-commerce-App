import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateCurrencySymbol from "../../../business/CurrencySymbol/CreateCurrencySymbol.service.js";

export default async function CreateCurrencySymbolController(req, res) {
    const { CountryID, CurrencySymbol } = req.body;
    const CreatedBy = req.body.AdminId || req.body.AdminID;

    try {
        const currencySymbol = await CreateCurrencySymbol({ CountryID, CurrencySymbol, CreatedBy });
        return Created(res, "Currency symbol created successfully", currencySymbol);
    } catch (err) {
        const errorContext = { CountryID, CurrencySymbol, CreatedBy };
        const errorMessage = typeof err === "string" ? err : err.message;

        if (err.name === 'ValidationError' || err.name === 'CastError' || errorMessage.includes("required") || errorMessage.includes("Invalid")) {
            return BadRequest(res, errorMessage, errorContext);
        }
        return ServerError(res, errorMessage, errorContext);
    }
}
