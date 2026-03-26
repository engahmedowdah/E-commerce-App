import CountryModel from "../../data/Country/Country.model.js";
const UpdateCountry = async ({ CountryID, Name, Slug, CurrencySymbol, IsActivated, UpdatedBy }) => {
  try {
    if (!CountryID || !Name || !CurrencySymbol || !Slug || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const country = await CountryModel.findById(CountryID);
    if (!country) {
      throw new Error("Country not found");
    }

    if (Name) country.Name = Name;
    if (Slug) country.Slug = Slug;
    if (CurrencySymbol) country.CurrencySymbol = CurrencySymbol;
    if (IsActivated) country.IsActivated = IsActivated;
    if (UpdatedBy) country.UpdatedBy = UpdatedBy;

    country.UpdatedDate = Date.now();

    await country.save();
    return country;
  } catch (error) {
    throw "Error updating country";
  }
};
export default UpdateCountry;
