import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateCountry from "../../../business/Country/UpdateCountry.service.js";
export default async function UpdateCountryController(req, res) {
    const { CountryID, Name, Currency, Slug, IsActive } = req.body;
    const UpdatedBy = req.body.AdminId;
    try {
        const result = await UpdateCountry(CountryID, { Name, Currency, Slug, IsActive, UpdatedBy });
        if (!result) {
            return NotFound(res, "Country not found");
        }
        return Ok(res, "Country updated successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
