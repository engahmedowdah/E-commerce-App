const CityMapper = async (city) => {
  if (!city) return null;
  const cityObj = typeof city.toObject === "function" ? city.toObject() : city;
  const mapped = {
    ...cityObj,
  };
  if (cityObj.CountryID && typeof cityObj.CountryID === "object") {
    mapped.Country = cityObj.CountryID;
    mapped.CountryID = cityObj.CountryID._id.toString();
  }
  return mapped;
};
export default CityMapper;
