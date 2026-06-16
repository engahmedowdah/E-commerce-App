import mongoose from "mongoose";
import CountryModel from "../../data/Country/Country.model.js";
import CountryMapper from "./CountryMapper.js";
const GetCountryByID = async ({ CountryID }) => {
    if (!mongoose.Types.ObjectId.isValid(CountryID)) {
        return null;
    }
    const country = await CountryModel.findOne({ _id: CountryID, IsDeleted: false }).lean();
    return await CountryMapper(country);
};
export default GetCountryByID;
