import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import GetCollectionByID from "../../../business/Collection/GetCollectionByID.service.js";
const getByIDSchema = {
    CollectionID: { type: "string", required: true },
};
export default async function GetCollectionByIDController(req, res) {
    const error = ValidateSchema(req.body, getByIDSchema);
    if (error) return BadRequest(res, error);
    const { CollectionID } = req.body;
    try {
        const result = await GetCollectionByID({ CollectionID });
        if (!result) return NotFound(res, "Collection not found");
        return Ok(res, "Collection fetched successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
