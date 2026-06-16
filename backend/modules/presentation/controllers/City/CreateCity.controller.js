import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateCity from "../../../business/City/CreateCity.service.js";
const createSchema = {
    CountryID: { type: "string", required: true },
    Name: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
};
export default async function CreateCityController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { CountryID, Name, IsActivated } = req.body;
    if (!Name || !CountryID) {
        return BadRequest(res, "Name and CountryID are required");
    }
    try {
        const city = await CreateCity({ CountryID, Name, IsActivated });
        if (!city) {
            return BadRequest(res, "Failed to create city");
        }
        return Created(res, "City created successfully", city);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
