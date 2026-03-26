import { BadRequest, ServerError, Ok } from "../../../../shared/utils.js";
import DeleteCurrencySymbol from "../../../business/CurrencySymbol/DeleteCurrencySymbol.service.js";

export default async function DeleteCurrencySymbolController(req, res) {
    const { CurrencySymbolID } = req.body;
    const UpdatedBy = req.body.AdminId || req.body.AdminID;

    try {
        const deletedCurrencySymbol = await DeleteCurrencySymbol({ CurrencySymbolID, UpdatedBy });
        return Ok(res, "Currency symbol deleted successfully", deletedCurrencySymbol);
    } catch (err) {
        const errorContext = { CurrencySymbolID, UpdatedBy };
        const errorMessage = typeof err === "string" ? err : err.message;

        if (err.name === 'ValidationError' || err.name === 'CastError' || errorMessage.includes("required") || errorMessage.includes("Invalid") || errorMessage.includes("not found")) {
            return BadRequest(res, errorMessage, errorContext);
        }
        return ServerError(res, errorMessage, errorContext);
    }
}
