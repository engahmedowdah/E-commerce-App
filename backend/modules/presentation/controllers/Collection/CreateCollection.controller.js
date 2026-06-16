import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateCollection from "../../../business/Collection/CreateCollection.service.js";
const createSchema = {
    Name: { type: "string", required: true },
    Slug: { type: "string", required: true },
    Description: { type: "string", required: false },
    IsActivated: { type: "boolean", required: false },
};
export default async function CreateCollectionController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { Name, Description, IsActivated, Slug } = req.body;
    if (!Name || !Slug) {
        return BadRequest(res, "Name and Slug are required");
    }
    try {
        const collection = await CreateCollection({ Name, Description, IsActivated, Slug });
        if (!collection) {
            return BadRequest(res, "Failed to create collection");
        }
        return Created(res, "Collection created successfully", collection);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
