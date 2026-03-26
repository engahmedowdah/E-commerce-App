import CityModel from "../../data/City/City.model.js";
const DeleteCity = async ({ CityID, UpdatedBy }) => {
  try {
    if (!CityID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const city = await CityModel.findById(CityID);
    if (!city) {
      throw new Error("City not found");
    }

    city.IsDeleted = true;
    city.IsActivated = false;
    city.UpdatedBy = UpdatedBy;
    city.UpdatedDate = new Date();

    await city.save();
    return city;
  } catch (error) {
    throw "Error deleting city";
  }
};
export default DeleteCity;
