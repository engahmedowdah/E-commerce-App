import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetCollectionByID from "../../../business/Collection/GetCollectionByID.service.js";
export default async function GetCollectionByIDController(req, res) {
    const { CollectionID } = req.body;
    try {
        const collection = await GetCollectionByID(CollectionID);
        if (!collection) {
            return NotFound(res, "Collection not found");
        }
        return Ok(res, "Collection fetched successfully", collection);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
