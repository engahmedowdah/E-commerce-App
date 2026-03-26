import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdateAddress from "../../../business/Address/UpdateAddress.service.js";
export default async function UpdateAddressController(req, res) {
  const {
    AddressID,
    AddressLine1,
    AddressLine2,
    CityID,
    CountryID,
    IsDefault,
    UserID,
  } = req.body;
  try {
    const UpdatedBy = UserID;
    const address = await UpdateAddress(AddressID, UserID, {
      CityID,
      CountryID,
      AddressLine1,
      AddressLine2,
      IsDefault,
      UpdatedBy,
    });
    if (!address) {
      return NotFound(res, "Address not found or unauthorized");
    }
    return Ok(res, "Address updated successfully", address);
  } catch (err) {
    return ServerError(res, err.message);
  }
}
