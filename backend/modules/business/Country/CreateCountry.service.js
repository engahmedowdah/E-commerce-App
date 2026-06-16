import CountryModel from "../../data/Country/Country.model.js";
import CountryMapper from "./CountryMapper.js";
const CreateCountry = async ({ Name, CurrencySymbol, Slug, IsActivated = false }) => {
  const existingCountry = await CountryModel.findOne({ Name, Slug, IsDeleted: false });
  if (existingCountry) throw new Error("Country already exists");
  const country = await CountryModel.create({
    Name: Name,
    CurrencySymbol: CurrencySymbol,
    Slug: Slug,
    IsActivated: IsActivated || false,
    CreatedDate: new Date(),
  });
  return await CountryMapper(country);
};
export default CreateCountry;
