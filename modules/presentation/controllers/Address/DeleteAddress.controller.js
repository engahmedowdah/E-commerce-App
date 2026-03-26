import { NoContent, NotFound, ServerError } from "../../../../shared/utils.js";

import DeleteAddress from "../../../business/Address/DeleteAddress.service.js";

export default async function DeleteAddressController(req, res) {
  const { AddressID, UserID } = req.body;
  console.log(AddressID, UserID);
  try {
    const address = await DeleteAddress(AddressID, UserID);
    if (!address) {
      return NotFound(res, "Address not found");
    }
    return NoContent(res, "Address deleted successfully");
  } catch (err) {
    return ServerError(res, err.message);
  }
}
