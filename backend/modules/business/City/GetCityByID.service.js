import mongoose from "mongoose";
import CityModel from "../../data/City/City.model.js";
import CityMapper from "./CityMapper.js";
const GetCityByID = async ({ CityID }) => {
  if (!mongoose.Types.ObjectId.isValid(CityID)) {
    return null;
  }
  const city = await CityModel.findOne({
    _id: CityID,
    IsDeleted: false,
  })
  .populate("CountryID")
  .lean();
  if (!city) throw new Error("City not found");
  return await CityMapper(city);
};
export default GetCityByID;
