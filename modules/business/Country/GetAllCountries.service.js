import CountryModel from "../../data/Country/Country.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAllCountries = async ({ includeDeleted = false }) => {
    try {
        const countries = await CountryModel.find({ ...NotDeletedFilter(includeDeleted) });
        if (!countries) {
            throw new Error("Countries not found");
        }
        return countries;
    } catch (error) {
        throw "Error getting countries";
    }
};
export default GetAllCountries;
