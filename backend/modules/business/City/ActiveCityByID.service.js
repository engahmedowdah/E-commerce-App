import CityModel from "../../data/City/City.model.js";
import CityMapper from "./CityMapper.js";
const ActiveCityByID = async ({ CityID }) => {
    const city = await CityModel.findOne({ _id: CityID, IsDeleted: false });
    if (!city) throw new Error("City not found");
    const updatedDoc = await CityModel.findOneAndUpdate(
        { _id: CityID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    )
    .populate("CountryID")
    .lean();
    if (!updatedDoc) throw new Error("City not found");
    return await CityMapper(updatedDoc);
};
export default ActiveCityByID;
