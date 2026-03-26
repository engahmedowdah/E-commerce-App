import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteCity from "../../../business/City/DeleteCity.service.js";
export default async function DeleteCityController(req, res) {
    const { CityID } = req.body;
    try {
        const city = await DeleteCity(CityID);
        if (!city) {
            return NotFound(res, "City not found");
        }
        return NoContent(res, "City deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}