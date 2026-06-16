import AddressModel from "../../data/Address/Address.model.js";
import AddressMapper from "./AddressMapper.js";
const UpdateAddress = async (
  { AddressID, UserID, CityID, CountryID, AddressLine1, AddressLine2, PostalCode, IsDefault }
) => {
  if (IsDefault) {
    await AddressModel.updateMany(
      { UserID, IsDefault: true },
      { IsDefault: false }
    );
  }
  const updatedAddress = await AddressModel.findOneAndUpdate(
    { _id: AddressID, UserID: UserID },
    {
      CityID: CityID,
      CountryID: CountryID,
      AddressLine1: AddressLine1,
      AddressLine2: AddressLine2,
      PostalCode: PostalCode,
      IsDefault: IsDefault,
      UpdatedDate: new Date(),
    },
    { new: true }
  )
  .populate([ "UserID", "CityID", "CountryID" ]).lean();
  return await AddressMapper(updatedAddress);
};
export default UpdateAddress;
