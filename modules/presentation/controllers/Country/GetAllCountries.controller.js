import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCountries from "../../../business/Country/GetAllCountries.service.js";
export default async function GetAllCountriesController(req, res) {
    try {
        const countries = await GetAllCountries();
        return Ok(res, "Countries fetched successfully", countries);
    } catch (err) {
        return ServerError(res, err.message);
    }
}