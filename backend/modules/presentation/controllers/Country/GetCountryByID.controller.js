import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetCountryByID from "../../../business/Country/GetCountryByID.service.js";
const getByIDSchema = {
    CountryID: { type: "string", required: true },
  };
export default async function GetCountryByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { CountryID } = req.body;
    try {
        const result = await GetCountryByID({ CountryID });
        if (!result) return NotFound(res, "Country not found");
        return Ok(res, "Country fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
