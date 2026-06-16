import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveCountryByID from "../../../business/Country/ActiveCountryByID.service.js";
const activeSchema = {
    CountryID: { type: "string", required: true },
  };
export default async function ActiveCountryByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { CountryID } = req.body;
    try {
        const result = await ActiveCountryByID({ CountryID });
        if (!result) return NotFound(res, "Country not found");
        return Ok(res, "Country activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
