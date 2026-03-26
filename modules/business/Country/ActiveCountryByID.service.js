import CountryModel from "../../data/Country/Country.model.js";
const ActiveCountryByID = async ({ CountryID, UpdatedBy }) => {
  try {
    if (!CountryID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const country = await CountryModel.findById(CountryID);
    if (!country) {
      throw new Error("Country not found");
    }

    country.IsActivated = !country.IsActivated;
    country.UpdatedBy = UpdatedBy;
    country.UpdatedDate = new Date();

    await country.save();
    return country;
  } catch (error) {
    throw "Error activating country";
  }
};
export default ActiveCountryByID;
