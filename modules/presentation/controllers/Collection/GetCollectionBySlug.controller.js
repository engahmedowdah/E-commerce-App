import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetCollectionBySlug from "../../../business/Collection/GetCollectionBySlug.service.js";

export default async function GetCollectionBySlugController(req, res) {
    const { Slug } = req.body;
    try {
        const collection = await GetCollectionBySlug(Slug);
        if (!collection) {
            return NotFound(res, "Collection not found");
        }
        return Ok(res, "Collection fetched successfully", collection);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
