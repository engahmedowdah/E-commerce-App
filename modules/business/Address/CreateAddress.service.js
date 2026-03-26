import AddressModel from "../../data/Address/Address.model.js";

const CreateAddress = async ({
  UserID,
  CityID,
  CountryID,
  AddressLine1,
  AddressLine2,
  PostalCode,
  IsDefault,
  CreatedBy,
}) => {
  try {
    if (!UserID || !CityID || !CountryID || !AddressLine1 || !CreatedBy || !PostalCode) {
      throw new Error("Missing required fields");
    }

    if (IsDefault) {
      await AddressModel.updateMany(
        { UserID, IsDefault: true },
        { IsDefault: false }
      );
    }

    const address = await AddressModel.create({
      UserID,
      CityID,
      CountryID,
      AddressLine1,
      AddressLine2,
      PostalCode,
      IsDefault: IsDefault || false,
      CreatedBy,
      CreatedDate: new Date(),
    });

    await address.populate("CityID");
    await address.populate("CountryID");
    await address.populate("UserID");

    return address;

  } catch (error) {
    throw "Error creating address";
  }
};

export default CreateAddress;