import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetCityByID from "../../../business/City/GetCityByID.service.js";
const getByIDSchema = {
    CityID: { type: "string", required: true },
};
export default async function GetCityByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { CityID } = req.body;
    try {
        const result = await GetCityByID({ CityID });
        if (!result) return NotFound(res, "City not found");
        return Ok(res, "City fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
