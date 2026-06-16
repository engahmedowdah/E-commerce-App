import CountryModel from "../../data/Country/Country.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import CountryMapper from "./CountryMapper.js";
const DeleteCountry = async ({ CountryID }) => {
    const country = await CountryModel.findOne({ _id: CountryID, IsDeleted: false });
    if (!country) throw new Error("Country not found");
    const deleted = await SoftDeleteById(CountryModel, CountryID);
    return await CountryMapper(deleted);
};
export default DeleteCountry;
