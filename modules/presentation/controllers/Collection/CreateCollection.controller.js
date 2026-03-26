import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateCollection from "../../../business/Collection/CreateCollection.service.js";
export default async function CreateCollectionController(req, res) {
    const { AdminId, Description, IsActive, Name, Slug } = req.body;
    if (!Name || !Slug) {
        return BadRequest(res, "Name and Slug are required");
    }
    try {
        const CreatedBy = AdminId;
        const collection = await CreateCollection({ Name, Slug, Description, IsActive, CreatedBy });
        return Created(res, "Collection created successfully", collection);
    } catch (err) {
        return ServerError(res, err.message);
    }
}