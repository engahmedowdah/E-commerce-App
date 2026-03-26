import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveCityByID from "../../../business/City/ActiveCityByID.service.js";

export default async function ActiveCityByIDController(req, res) {
    const { CityID } = req.body;
    try {
        const city = await ActiveCityByID(CityID);
        if (!city) {
            return BadRequest(res, "Failed to activate city or city not found");
        }
        return Ok(res, "City activated successfully", city);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
