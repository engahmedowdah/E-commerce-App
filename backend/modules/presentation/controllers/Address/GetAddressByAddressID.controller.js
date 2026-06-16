import {
  Ok,
  BadRequest,
  NotFound,
  ServerError,
  ValidateSchema,
} from "../../../../shared/utils.js";
import GetAddressByAddressID from "../../../business/Address/GetAddressByAddressID.service.js";
const getByAddressIDSchema = {
  AddressID: { type: "string", required: true }
};
export default async function GetAddressByAddressIDController(
  req,
  res,
) {
  const { AddressID } = req.body;
  const error = ValidateSchema({ AddressID }, getByAddressIDSchema);
  if (error) return BadRequest(res, error);
  try {
    const address = await GetAddressByAddressID({ AddressID });
    if (!address) {
      return NotFound(res, "Address not found");
    }
    return Ok(res, "Address fetched successfully", address);
  } catch (err) {
    return ServerError(res, err.message);
  }
}
