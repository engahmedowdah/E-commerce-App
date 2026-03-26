import CityModel from "../../data/City/City.model.js";
const ActiveCityByID = async ({ CityID, UpdatedBy }) => {
  try {
    if (!CityID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const city = await CityModel.findById(CityID);
    if (!city) {
      throw new Error("City not found");
    }

    city.IsActivated = !city.IsActivated;
    city.UpdatedBy = UpdatedBy;
    city.UpdatedDate = new Date();

    await city.save();
    return city;
  } catch (error) {
    throw "Error activating city";
  }
};
export default ActiveCityByID;
