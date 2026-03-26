import CountryModel from "../../data/Country/Country.model.js";
const CreateCountry = async ({ Name, Currency, Slug, CurrencySymbol, IsActivated, CreatedBy }) => {
  try {
    if (!Name || !Currency || !Slug || !CreatedBy) {
      throw new Error("Missing required fields");
    }
    const country = await CountryModel.create({
      Name,
      Currency,
      Slug,
      IsActivated: IsActivated || false,
      CurrencySymbol: CurrencySymbol,
      CreatedBy,
      CreatedDate: new Date(),
    });
    return country;
  } catch (error) {
    throw "Error creating country";
  }

};
export default CreateCountry;
