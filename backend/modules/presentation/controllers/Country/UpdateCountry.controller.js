import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateCountry from "../../../business/Country/UpdateCountry.service.js";
const updateSchema = {
      CountryID: { type: "string", required: true },
      Name: { type: "string", required: false },
      CurrencySymbol: { type: "string", required: false },
      Slug: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateCountryController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { CountryID, Name, CurrencySymbol, Slug, IsActivated } = req.body;
    try {
        const result = await UpdateCountry({ CountryID, Name, CurrencySymbol, Slug, IsActivated });
        if (!result) return NotFound(res, "Country not found");
        return Ok(res, "Country updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
