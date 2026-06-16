import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllCollections from "../../../business/Collection/GetAllCollections.service.js";
export default async function GetAllCollectionsController(req, res) {
    try {
        const { page = 1, limit = 10, sort = "newest" } = req.query;
        const result = await GetAllCollections({ page, limit, sort });
        return Ok(res, "Collections fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
