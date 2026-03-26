import CityModel from "../../data/City/City.model.js";
const UpdateCity = async ({ CityID, Name, CountryID, UpdatedBy }) => {
  try {
    if (!CityID || !Name || !CountryID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const city = await CityModel.findById(CityID);
    if (!city) {
      throw new Error("City not found");
    }

    if (!city.IsActivated) {
      throw new Error("City is not activated");
    }

    if (Name) city.Name = Name;
    if (CountryID) city.CountryID = CountryID;
    if (UpdatedBy) city.UpdatedBy = UpdatedBy;
    city.UpdatedDate = new Date();
    await city.save();

    await city.populate("CountryID");
    return city;
  } catch (error) {
    console.error("UpdateCity Error:", error.message);
    throw error;
  }
};
export default UpdateCity;
