import AddressModel from "../../data/Address/Address.model.js";
const IsAddressExists = async ({ AddressID }) => {
  const exists = await AddressModel.exists({
    _id: AddressID,
    IsDeleted:false
  });
  return !!exists;
};
export default IsAddressExists;
