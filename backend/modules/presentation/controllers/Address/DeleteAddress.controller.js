import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import DeleteAddress from "../../../business/Address/DeleteAddress.service.js";
const deleteSchema = {
    AddressID: { type: "string", required: true },
};
export default async function DeleteAddressController(req, res) {
    const error = ValidateSchema(req.body, deleteSchema);
    if (error) return BadRequest(res, error);
    try {
        const { AddressID } = req.body;
        const result = await DeleteAddress({ AddressID });
        if (!result) return NotFound(res, "Address not found");
        return Ok(res, "Address deleted successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
