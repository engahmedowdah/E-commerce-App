import CityModel from "../../data/City/City.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetCityByID = async ({ CityID, CountryID, includeDeleted = false }) => {
  try {
    if (!CityID || !CountryID) {
      throw new Error("Missing required fields");
    }
    const city = await CityModel.findOne({
      _id: CityID,
      CountryID,
      ...NotDeletedFilter(includeDeleted),
    });
    if (!city) {
      throw new Error("City not found");
    }
    await city.populate("CountryID");
    return city;
  } catch (error) {
    console.error("GetCityByID Error:", error.message);
    throw error;
  }
};
export default GetCityByID;
