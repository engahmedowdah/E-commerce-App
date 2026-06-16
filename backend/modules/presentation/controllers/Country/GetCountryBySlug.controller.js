import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetCountryBySlug from "../../../business/Country/GetCountryBySlug.service.js";
const getBySlugSchema = {
    Slug: { type: "string", required: true },
  };
export default async function GetCountryBySlugController(req, res) {
    const error = ValidateSchema(req.body, getBySlugSchema);
    if (error) return BadRequest(res, error);
    const { Slug } = req.body;
    try {
        const result = await GetCountryBySlug({ Slug });
        if (!result) return NotFound(res, "Country not found");
        return Ok(res, "Country fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
