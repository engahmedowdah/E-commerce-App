import CityModel from "../../data/City/City.model.js";
import CityMapper from "./CityMapper.js";
const CreateCity = async ({ Name, CountryID, IsActivated = false }) => {
  const existingCity = await CityModel.findOne({ Name, IsDeleted: false });
  if (existingCity) throw new Error("City already exists");
  const city = await CityModel.create({
    Name: Name,
    CountryID: CountryID,
    IsActivated: IsActivated || false,
    CreatedDate: new Date(),
  });
  const populated = await city.populate("CountryID");
  return await CityMapper(populated);
};
export default CreateCity;
