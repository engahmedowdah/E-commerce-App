import { Ok, BadRequest, ServerError } from "../../../../shared/utils.js";
import ActiveCollectionByID from "../../../business/Collection/ActiveCollectionByID.service.js";

export default async function ActiveCollectionByIDController(req, res) {
    const { CollectionID } = req.body;
    try {
        const collection = await ActiveCollectionByID(CollectionID);
        if (!collection) {
            return BadRequest(res, "Failed to activate collection or collection not found");
        }
        return Ok(res, "Collection activated successfully", collection);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
