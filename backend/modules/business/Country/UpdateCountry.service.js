import CountryModel from "../../data/Country/Country.model.js";
import CountryMapper from "./CountryMapper.js";
const UpdateCountry = async ({ CountryID, Name, Slug, CurrencySymbol, IsActivated }) => {
  const country = await CountryModel.findOne({ _id: CountryID, IsDeleted: false });
  if (!country) throw new Error("Country not found");
  const existingCountry = await CountryModel.findOne({ Name, Slug, _id: { $ne: CountryID }, IsDeleted: false });
  if (existingCountry) throw new Error("Country already exists");
  const updatedCountry = await CountryModel.findByIdAndUpdate(CountryID, {
    Name,
    Slug,
    CurrencySymbol,
    IsActivated,
    UpdatedDate: Date.now(),
  }, { new: true });
  if (!updatedCountry) throw new Error("Country not found");
  return await CountryMapper(updatedCountry);
};
export default UpdateCountry;
