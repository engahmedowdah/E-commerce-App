import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteCity from "../../../business/City/DeleteCity.service.js";
const deleteSchema = {
    CityID: { type: "string", required: true },
  };
export default async function DeleteCityController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { CityID } = req.body;
    try {
        const result = await DeleteCity({ CityID });
        if (!result) return NotFound(res, "City not found");
        return Ok(res, "City deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
