import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateCity from "../../../business/City/CreateCity.service.js";
export default async function CreateCityController(req, res) {
    const { AdminId, CountryID, Name } = req.body;
    if (!Name || !CountryID) {
        return BadRequest(res, "Name and CountryID are required");
    }
    try {
        const CreatedBy = AdminId;
        const city = await CreateCity({ Name, CountryID, CreatedBy });
        return Created(res, "City created successfully", city);
    } catch (err) {
        return ServerError(res, err.message);
    }
}