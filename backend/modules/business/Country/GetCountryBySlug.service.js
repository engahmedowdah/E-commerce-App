import CountryModel from "../../data/Country/Country.model.js";
import CountryMapper from "./CountryMapper.js";
const GetCountryBySlug = async ({ Slug }) => {
    const country = await CountryModel.findOne({ Slug: Slug, IsDeleted: false }).lean();
    if (!country) throw new Error("Country not found");
    return await CountryMapper(country);
};
export default GetCountryBySlug;
