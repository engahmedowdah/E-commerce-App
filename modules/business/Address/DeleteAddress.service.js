import AddressModel from "../../data/Address/Address.model.js";
const DeleteAddress = async ({ AddressID, UserID, UpdatedBy }) => {
  try {
    if (!AddressID && !UserID) {
      throw new Error("Missing required fields");
    }
    const deletedAddress = await AddressModel.updateOne(
      { _id: AddressID, UserID },
      { IsDeleted: true, UpdatedBy, UpdatedDate: new Date() }
    );
    return deletedAddress;
  } catch (error) {
    throw "Error deleting address";
  }
};
export default DeleteAddress;
