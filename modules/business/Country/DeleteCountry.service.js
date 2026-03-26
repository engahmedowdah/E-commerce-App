import CountryModel from "../../data/Country/Country.model.js";
const DeleteCountry = async ({ CountryID, UpdatedBy }) => {
  try {
    if (!CountryID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const country = await CountryModel.findById(CountryID);
    if (!country) {
      throw new Error("Country not found");
    }
    country.IsDeleted = true;
    country.IsActivated = false;
    country.UpdatedBy = UpdatedBy;
    country.UpdatedDate = new Date();

    await country.save();
    return country;
  } catch (error) {
    throw "Error deleting country";
  }
};
export default DeleteCountry;