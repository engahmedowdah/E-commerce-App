import CityModel from "../../data/City/City.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import CityMapper from "./CityMapper.js";
const DeleteCity = async ({ CityID }) => {
    const city = await CityModel.findOne({ _id: CityID, IsDeleted: false });
    if (!city) throw new Error("City not found");
    const deleted = await SoftDeleteById(CityModel, CityID);
    const populated = await deleted.populate("CountryID");
    return await CityMapper(populated);
};
export default DeleteCity;
