import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCollections from "../../../business/Collection/GetAllCollections.service.js";
export default async function GetAllCollectionsController(req, res) {
    try {
        const Collections = await GetAllCollections();
        return Ok(res, "Collections fetched successfully", Collections);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
