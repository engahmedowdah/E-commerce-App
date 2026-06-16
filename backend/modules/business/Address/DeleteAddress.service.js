import AddressModel from "../../data/Address/Address.model.js";
import AddressMapper from "./AddressMapper.js";
const DeleteAddress = async ({ AddressID }) => {
  const address = await AddressModel.findById(AddressID);
  if (!address) {
    throw new Error("Address not found");
  }
  const deletedAddress = await AddressModel.findOneAndUpdate(
    { _id: AddressID },
    { IsDeleted: true, UpdatedDate: new Date() },
    { new: true }
  ).populate([ "UserID", "CityID", "CountryID" ]).lean();
  return await AddressMapper(deletedAddress);
};
export default DeleteAddress;
