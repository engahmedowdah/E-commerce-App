import { Ok, ServerError, ValidateSchema, BadRequest } from "../../../../shared/utils.js";
import GetAllCities from "../../../business/City/GetAllCities.service.js";
const getAllSchema = {
    CountryID: { type: "string", required: true },
};
export default async function GetAllCitiesController(req, res) {
    const { CountryID } = req.body;
    const { page = 1, limit = 10, sort = "newest" } = req.query;
    const error = ValidateSchema(req.body, getAllSchema);
    if (error) return BadRequest(res, error);
    try {
        const result = await GetAllCities({ CountryID, page, limit, sort });
        return Ok(res, "Cities fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
