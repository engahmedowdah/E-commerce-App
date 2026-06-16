import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateCountry from "../../../business/Country/CreateCountry.service.js";
const createSchema = {
    CurrencySymbol: { type: "string", required: true },
    Name: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
    Slug: { type: "string", required: true },
};
export default async function CreateCountryController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { CurrencySymbol, Name, IsActivated, Slug } = req.body;
    if (!Name || !CurrencySymbol || !Slug) {
        return BadRequest(res, "Name, CurrencySymbol, and Slug are required");
    }
    try {
        const country = await CreateCountry({ CurrencySymbol, Name, IsActivated, Slug });
        if (!country) {
            return BadRequest(res, "Failed to create country");
        }
        return Created(res, "Country created successfully", country);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
