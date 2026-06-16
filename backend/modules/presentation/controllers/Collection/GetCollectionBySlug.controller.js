import { Ok, NotFound, ServerError, BadRequest, ValidateSchema } from "../../../../shared/utils.js";
import GetCollectionBySlug from "../../../business/Collection/GetCollectionBySlug.service.js";
const getBySlugSchema = {
    Slug: { type: "string", required: true },
};
export default async function GetCollectionBySlugController(req, res) {
    const error = ValidateSchema(req.body, getBySlugSchema);
    if (error) return BadRequest(res, error);
    const { Slug } = req.body;
    try {
        const collection = await GetCollectionBySlug({ Slug });
        if (!collection) {
            return NotFound(res, "Collection not found");
        }
        return Ok(res, "Collection fetched successfully", collection);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
