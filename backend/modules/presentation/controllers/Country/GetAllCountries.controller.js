import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCountries from "../../../business/Country/GetAllCountries.service.js";
export default async function GetAllCountriesController(req, res) {
    try {
        const { page, limit, sort } = req.query;
        const result = await GetAllCountries({ page, limit, sort });
        return Ok(res, "Countries fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
