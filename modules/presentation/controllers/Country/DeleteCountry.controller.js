import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteCountry from "../../../business/Country/DeleteCountry.service.js";
export default async function DeleteCountryController(req, res) {
    const { CountryID } = req.body;
    try {
        const country = await DeleteCountry(CountryID);
        if (!country) {
            return NotFound(res, "Country not found");
        }
        return NoContent(res, "Country deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}
