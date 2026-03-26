import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCities from "../../../business/City/GetAllCities.service.js";
export default async function GetAllCitiesController(req, res) {
    try {
        const cities = await GetAllCities();
        return Ok(res, "Cities fetched successfully", cities);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
