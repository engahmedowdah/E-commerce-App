import AddressModel from "../../data/Address/Address.model.js";
import AddressMapper from "./AddressMapper.js";
const CreateAddress = async ({
  UserID,
  CityID,
  CountryID,
  AddressLine1,
  AddressLine2,
  PostalCode,
  IsDefault,
}) => {
  if (IsDefault) {
      await AddressModel.updateMany(
        { UserID, IsDefault: true },
        { IsDefault: false }
      );
    }
    const address = await AddressModel.create({
      UserID: UserID,
      CityID: CityID,
      CountryID: CountryID,
      AddressLine1: AddressLine1,
      AddressLine2: AddressLine2,
      PostalCode: PostalCode,
      IsDefault: IsDefault || false,
      CreatedDate: new Date(),
    });
    const populated = await AddressModel.findById(address._id)
      .populate("UserID")
      .populate("CityID")
      .populate("CountryID")
      .lean();
    return await AddressMapper(populated);
};
export default CreateAddress;
