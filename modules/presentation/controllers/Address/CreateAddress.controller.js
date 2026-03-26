import { Created, BadRequest, ServerError } from "../../../../shared/utils.js";
import CreateAddress from "../../../business/Address/CreateAddress.service.js";
export default async function CreateAddressController(req, res) {
  const { AddressLine1, AddressLine2, CityID, CountryID, IsDefault, UserID } =
    req.body;
  try {
    const CreatedBy = UserID;
    const address = await CreateAddress({
      UserID,
      CityID,
      CountryID,
      AddressLine1,
      AddressLine2,
      IsDefault,
      CreatedBy,
    });
    if (!address) {
      return BadRequest(res, "Failed to create address");
    }
    return Created(res, "Address created successfully", address);
  } catch (err) {
    return ServerError(res, err.message);
  }
}
