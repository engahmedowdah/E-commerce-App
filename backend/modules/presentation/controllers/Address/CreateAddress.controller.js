import {
  Created,
  BadRequest,
  ServerError,
  ValidateSchema,
} from "../../../../shared/utils.js";
import CreateAddress from "../../../business/Address/CreateAddress.service.js";
const createSchema = {
  CityID: { type: "string", required: true },
  CountryID: { type: "string", required: true },
  UserID: { type: "string", required: true },
  AddressLine1: { type: "string", required: true },
  AddressLine2: { type: "string", required: false },
  IsDefault: { type: "boolean", required: false },
  PostalCode: { type: "string", required: false },
};
export default async function CreateAddressController(req, res) {
  const error = ValidateSchema(req.body, createSchema);
  if (error) return BadRequest(res, error);
  try {
    const {
      CityID,
      CountryID,
      UserID,
      AddressLine1,
      AddressLine2,
      IsDefault,
      PostalCode,
    } = req.body;
    if (PostalCode && PostalCode.length !== 5) {
      return BadRequest(res, "Postal code must be 5 digits");
    }
    if (PostalCode && !Number(PostalCode)) {
      return BadRequest(res, "Postal code must be a number");
    }
    const address = await CreateAddress({
      CityID,
      CountryID,
      UserID,
      AddressLine1,
      AddressLine2,
      IsDefault,
      PostalCode,
    });
    if (!address) {
      return BadRequest(res, "Failed to create address");
    }
    return Created(res, "Address created successfully", address);
  } catch (err) {
    return ServerError(res, err.message);
  }
}
