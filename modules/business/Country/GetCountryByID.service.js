import CountryModel from "../../data/Country/Country.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetCountryByID = async ({ CountryID, includeDeleted = false }) => {
    try {
        if (!CountryID) {
            throw new Error("Missing required fields");
        }
        const country = await CountryModel.findOne({ _id: CountryID, ...NotDeletedFilter(includeDeleted) });
        if (!country) {
            throw new Error("Country not found");
        }
        return country;
    } catch (error) {
        throw "Error getting country";
    }
};
export default GetCountryByID;
