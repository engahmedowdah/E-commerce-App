import { ServerError, Ok } from "../../../../shared/utils.js";
import GetAllCurrencySymbols from "../../../business/CurrencySymbol/GetAllCurrencySymbols.service.js";

export default async function GetAllCurrencySymbolsController(req, res) {
    const { IncludeDeleted } = req.body;
    try {
        const currencySymbols = await GetAllCurrencySymbols({ IncludeDeleted });
        return Ok(res, "Currency symbols fetched successfully", currencySymbols);
    } catch (err) {
        return ServerError(res, typeof err === "string" ? err : err.message, "GetAllCurrencySymbols");
    }
}
