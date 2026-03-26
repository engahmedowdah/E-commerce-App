import CityModel from "../../data/City/City.model.js";
const CreateCity = async ({ Name, CountryID, IsActivated, CreatedBy }) => {
  try {
    if (!Name || !CountryID || !CreatedBy) {
      throw new Error("Missing required fields");
    }
    const city = await CityModel.create({
      Name,
      CountryID,
      IsActivated: IsActivated || false,
      CreatedBy,
      CreatedDate: new Date(),
    });

    return city;
  } catch (error) {
    throw "Error creating city";
  }
};
export default CreateCity;
