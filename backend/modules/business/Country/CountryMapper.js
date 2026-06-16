import CityModel from "../../data/City/City.model.js";
const CountryMapper = async (country) => {
  if (!country) return null;
  const countryObj = typeof country.toObject === "function" ? country.toObject() : country;
  const cities = await CityModel.find({
    CountryID: countryObj._id,
    IsDeleted: false,
  }).lean();
  return {
    ...countryObj,
    Cities: cities || [],
  };
};
export default CountryMapper;
