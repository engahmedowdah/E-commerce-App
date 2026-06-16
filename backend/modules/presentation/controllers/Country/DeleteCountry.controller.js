import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteCountry from "../../../business/Country/DeleteCountry.service.js";
const deleteSchema = {
    CountryID: { type: "string", required: true },
  };
export default async function DeleteCountryController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { CountryID } = req.body;
    try {
        const result = await DeleteCountry({ CountryID });
        if (!result) return NotFound(res, "Country not found");
        return Ok(res, "Country deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
