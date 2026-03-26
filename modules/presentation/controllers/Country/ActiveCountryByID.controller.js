import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveCountryByID from "../../../business/Country/ActiveCountryByID.service.js";

export default async function ActiveCountryByIDController(req, res) {
    const { CountryID } = req.body;
    try {
        const country = await ActiveCountryByID(CountryID);
        if (!country) {
            return BadRequest(res, "Failed to activate country or country not found");
        }
        return Ok(res, "Country activated successfully", country);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
