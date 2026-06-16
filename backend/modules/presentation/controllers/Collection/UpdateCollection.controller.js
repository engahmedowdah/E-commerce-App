import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateCollection from "../../../business/Collection/UpdateCollection.service.js";
const updateSchema = {
      CollectionID: { type: "string", required: true },
      Name: { type: "string", required: false },
      Slug: { type: "string", required: false },
      Description: { type: "string", required: false },
      IsActivated: { type: "boolean", required: false },
    };
export default async function UpdateCollectionController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    const { CollectionID, Name, Slug, Description, IsActivated } = req.body;
    try {
        const result = await UpdateCollection({ CollectionID, Name, Slug, Description, IsActivated });
        if (!result) return NotFound(res, "Collection not found");
        return Ok(res, "Collection updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
