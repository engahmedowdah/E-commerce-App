const AddressMapper = (addr) => {
  if (!addr) return null;
  const addressObj = typeof addr.toObject === 'function' ? addr.toObject() : addr;
  const user = addressObj.UserID && typeof addressObj.UserID === 'object' ? addressObj.UserID : null;
  const city = addressObj.CityID && typeof addressObj.CityID === 'object' ? addressObj.CityID : null;
  const country = addressObj.CountryID && typeof addressObj.CountryID === 'object' ? addressObj.CountryID : null;
  return {
    ...addressObj,
    User: user,
    City: city,
    Country: country,
    UserID: user ? user._id.toString() : (addressObj.UserID ? addressObj.UserID.toString() : null),
    CityID: city ? city._id.toString() : (addressObj.CityID ? addressObj.CityID.toString() : null),
    CountryID: country ? country._id.toString() : (addressObj.CountryID ? addressObj.CountryID.toString() : null),
  };
};
export default AddressMapper;
