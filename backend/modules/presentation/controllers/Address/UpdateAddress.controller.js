import { Ok, BadRequest, NotFound, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import UpdateAddress from "../../../business/Address/UpdateAddress.service.js";
const updateSchema = {
    AddressID: { type: "string", required: true },
    UserID: { type: "string", required: false },
    CityID: { type: "string", required: false },
    CountryID: { type: "string", required: false },
    AddressLine1: { type: "string", required: false },
    AddressLine2: { type: "string", required: false },
    PostalCode: { type: "string", required: false },
    IsDefault: { type: "boolean", required: false },
};
export default async function UpdateAddressController(req, res) {
    const error = ValidateSchema(req.body, updateSchema);
    if (error) return BadRequest(res, error);
    try {
        const { AddressID, UserID, CityID, CountryID, AddressLine1, AddressLine2, PostalCode, IsDefault } = req.body;
        if (PostalCode && PostalCode.length !== 5) {
            return BadRequest(res, "Postal code must be 5 digits");
        }
        if (PostalCode && !Number(PostalCode)) {
            return BadRequest(res, "Postal code must be a number");
        }
        const result = await UpdateAddress({ AddressID, UserID, CityID, CountryID, AddressLine1, AddressLine2, PostalCode, IsDefault });
        if (!result) return NotFound(res, "Address not found");
        return Ok(res, "Address updated successfully", result);
    } catch (err) {
        return ServerError(res, "Something went wrong");
    }
}
