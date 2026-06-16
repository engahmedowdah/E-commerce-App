import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateCity from "../../../business/City/UpdateCity.service.js";
const updateSchema = {
      CityID: { type: "string", required: true },
      Name: { type: "string", required: false },
      CountryID: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateCityController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { CityID, Name, CountryID, IsActivated } = req.body;
    try {
        const result = await UpdateCity({ CityID, Name, CountryID, IsActivated });
        if (!result) return NotFound(res, "City not found");
        return Ok(res, "City updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
