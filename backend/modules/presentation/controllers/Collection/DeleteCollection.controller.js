import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteCollection from "../../../business/Collection/DeleteCollection.service.js";
const deleteSchema = {
    CollectionID: { type: "string", required: true },
  };
export default async function DeleteCollectionController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    const { CollectionID } = req.body;
    try {
        const result = await DeleteCollection({ CollectionID });
        if (!result) return NotFound(res, "Collection not found");
        return Ok(res, "Collection deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
