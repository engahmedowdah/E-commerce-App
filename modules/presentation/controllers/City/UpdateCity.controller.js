import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateCity from "../../../business/City/UpdateCity.service.js";
export default async function UpdateCityController(req, res) {
    const { CountryID, Name, CityID } = req.body;
    try {
        const UpdatedBy = req.body.AdminId;
        const city = await UpdateCity(CityID, { Name, CountryID, UpdatedBy });
        if (!city) {
            return NotFound(res, "City not found");
        }
        return Ok(res, "City updated successfully", city);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
