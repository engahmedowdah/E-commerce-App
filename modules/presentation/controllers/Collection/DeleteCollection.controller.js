import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";
import DeleteCollection from "../../../business/Collection/DeleteCollection.service.js";
export default async function DeleteCollectionController(req, res) {
    const { CollectionID } = req.body;
    try {
        const collection = await DeleteCollection(CollectionID);
        if (!collection) {
            return NotFound(res, "Collection not found");
        }
        return NoContent(res, "Collection deleted successfully");
    } catch (err) {
        return ServerError(res, err.message);
    }
}
