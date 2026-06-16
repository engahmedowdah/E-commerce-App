import mongoose from "mongoose";
import AddressModel from "../../data/Address/Address.model.js";
import AddressMapper from "./AddressMapper.js";
const GetAddressByAddressID = async ({ AddressID }) => {
  if (!mongoose.Types.ObjectId.isValid(AddressID)) {
    return null;
  }
  const address = await AddressModel.findOne({ _id: AddressID, IsDeleted: false })
    .populate("UserID")
    .populate("CityID")
    .populate("CountryID")
    .lean();
  return await AddressMapper(address);
};
export default GetAddressByAddressID;
