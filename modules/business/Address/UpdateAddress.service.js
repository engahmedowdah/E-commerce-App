import AddressModel from "../../data/Address/Address.model.js";
const UpdateAddress = async (
  { AddressID, UserID },
  { CityID, CountryID, AddressLine1, AddressLine2, PostalCode, IsDefault, UpdatedBy },
) => {
  try {
    if (!AddressID && !UserID) {
      throw new Error("Missing required fields");
    }
    if (IsDefault) {
      await AddressModel.updateMany(
        { UserID, IsDefault: true },
        { IsDefault: false }
      );
    }
    if (!CityID || !CountryID || !AddressLine1 || !PostalCode) {
      throw new Error("Missing required fields");
    }

    const updatedAddress = await AddressModel.findOneAndUpdate(
      { _id: AddressID, UserID: UserID },
      {
        CityID,
        CountryID,
        AddressLine1,
        AddressLine2,
        PostalCode,
        IsDefault,
        UpdatedBy,
        UpdatedDate: new Date(),
      }
    );

    await updatedAddress.populate("CityID");
    await updatedAddress.populate("CountryID");
    await updatedAddress.populate("UserID");

    return updatedAddress;
  } catch (error) {
    throw "Error updating address";
  }
};
export default UpdateAddress;
