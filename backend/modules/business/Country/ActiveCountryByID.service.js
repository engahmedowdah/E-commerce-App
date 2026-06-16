import CountryModel from "../../data/Country/Country.model.js";
import CountryMapper from "./CountryMapper.js";
const ActiveCountryByID = async ({ CountryID }) => {
    const updatedDoc = await CountryModel.findOneAndUpdate(
        { _id: CountryID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    if (!updatedDoc) throw new Error("Country not found");
    return await CountryMapper(updatedDoc);
};
export default ActiveCountryByID;
