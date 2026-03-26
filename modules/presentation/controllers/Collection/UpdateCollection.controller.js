import { Ok, BadRequest, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateCollection from "../../../business/Collection/UpdateCollection.service.js";
export default async function UpdateCollectionController(req, res) {
    const { CollectionID, Name, Slug, Description, IsActive } = req.body;
    const UpdatedBy = req.body.AdminId;
    try {
        const collection = await UpdateCollection(CollectionID, { Name, Slug, Description, IsActive, UpdatedBy });
        if (!collection) {
            return NotFound(res, "Collection not found");
        }
        return Ok(res, "Collection updated successfully", collection);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
