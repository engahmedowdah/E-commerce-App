import AddressModel from "../../data/Address/Address.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetUserAddressByID = async ({ UserID, AddressID, includeDeleted = false }) => {
  try {
    if (!UserID && !AddressID) {
      throw new Error("Missing required fields");
    }

    const addresses = await AddressModel.find(
      {
        _id: AddressID,
        UserID: UserID,
        ...NotDeletedFilter(includeDeleted),
      }
    );

    await Promise.all([
      addresses.populate("CityID"),
      addresses.populate("CountryID"),
      addresses.populate("UserID"),
    ]);

    return addresses;
  } catch (error) {
    throw "Error getting user address";
  }
};
export default GetUserAddressByID;
