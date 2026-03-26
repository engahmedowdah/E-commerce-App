import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetCityByID from "../../../business/City/GetCityByID.service.js";
export default async function GetCityByIDController(req, res) {
    const { CityID } = req.body;
    try {
        const city = await GetCityByID(CityID);
        if (!city) {
            return NotFound(res, "City not found");
        }
        return Ok(res, "City fetched successfully", city);
    } catch (err) {
        return ServerError(res, err.message);
    }
}