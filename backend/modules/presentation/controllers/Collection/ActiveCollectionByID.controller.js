import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import ActiveCollectionByID from "../../../business/Collection/ActiveCollectionByID.service.js";
const activeSchema = {
    CollectionID: { type: "string", required: true },
  };
export default async function ActiveCollectionByIDController(req, res) {
    const error = ValidateSchema(req.body, activeSchema);
    if (error) return BadRequest(res, error);
    const { CollectionID } = req.body;
    try {
        const result = await ActiveCollectionByID({ CollectionID });
        if (!result) return NotFound(res, "Collection not found");
        return Ok(res, "Collection activated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
