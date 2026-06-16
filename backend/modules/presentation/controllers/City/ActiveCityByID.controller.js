import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveCityByID from "../../../business/City/ActiveCityByID.service.js";
const activeSchema = {
    CityID: { type: "string", required: true },
  };
export default async function ActiveCityByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { CityID } = req.body;
    try {
        const result = await ActiveCityByID({ CityID });
        if (!result) return NotFound(res, "City not found");
        return Ok(res, "City activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
