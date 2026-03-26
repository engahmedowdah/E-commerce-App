import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetCountryByID from "../../../business/Country/GetCountryByID.service.js";
export default async function GetCountryByIDController(req, res) {
    const { CountryID } = req.body;
    try {
        const country = await GetCountryByID(CountryID);
        if (!country) {
            return NotFound(res, "Country not found");
        }
        return Ok(res, "Country fetched successfully", country);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
