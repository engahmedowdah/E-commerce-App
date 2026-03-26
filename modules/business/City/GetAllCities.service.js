import CityModel from "../../data/City/City.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAllCities = async ({ CountryID, includeDeleted = false }) => {
    try {
        if (!CountryID) {
            throw new Error("Missing required fields");
        }
        const cities = await CityModel.find({ CountryID, ...NotDeletedFilter(includeDeleted) });
        await Promise.all([
            cities.populate("CountryID")
        ]);
        return cities;
    } catch (error) {
        throw "Error getting cities";
    }
};
export default GetAllCities;
