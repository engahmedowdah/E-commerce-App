import CityModel from "../../data/City/City.model.js";
import CityMapper from "./CityMapper.js";
const UpdateCity = async ({ CityID, Name, CountryID, IsActivated }) => {
  const city = await CityModel.findOne({ _id: CityID, IsDeleted: false });
  if (!city) throw new Error("City not found");
  const existingCity = await CityModel.findOne({ Name, _id: { $ne: CityID }, IsDeleted: false });
  if (existingCity) throw new Error("City already exists");
  const updatedCity = await CityModel.findByIdAndUpdate(CityID, {
    Name,
    CountryID,
    IsActivated,
    UpdatedDate: new Date(),
  }, { new: true })
  .populate("CountryID")
  .lean();
  return await CityMapper(updatedCity);
};
export default UpdateCity;
