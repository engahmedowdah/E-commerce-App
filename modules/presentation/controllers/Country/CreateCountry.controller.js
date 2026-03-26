import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateCountry from "../../../business/Country/CreateCountry.service.js";
export default async function CreateCountryController(req, res) {
    const { Currency, IsActive, Name, Slug } = req.body;
    if (!Name || !Currency || !Slug) {
        return BadRequest(res, "Name, Currency, and Slug are required");
    }
    try {
        const CreatedBy = req.body.AdminId;
        const country = await CreateCountry({ Name, Currency, Slug, IsActive, CreatedBy });
        return Created(res, "Country created successfully", country);
    } catch (err) {
        return ServerError(res, err.message);
    }
}