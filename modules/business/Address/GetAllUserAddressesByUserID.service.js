import AddressModel from "../../data/Address/Address.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAllUserAddressesByUserID = async ({ UserID, includeDeleted = false }) => {
  try {
    if (!UserID) {
      throw new Error("Missing required fields");
    }
    const addresses = await AddressModel.find(
      {
        UserID: UserID,
        ...NotDeletedFilter(includeDeleted)
      }
    );

    await Promise.all([
      addresses.populate("CityID"),
      addresses.populate("CountryID"),
      addresses.populate("UserID"),
    ]);

    return addresses;
  } catch (error) {
    throw "Error getting all user addresses";
  }
};
export default GetAllUserAddressesByUserID;
