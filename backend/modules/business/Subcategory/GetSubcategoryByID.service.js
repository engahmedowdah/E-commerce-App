import mongoose from "mongoose";
import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
const GetSubcategoryByID = async ({ SubcategoryID }) => {
    if (!mongoose.Types.ObjectId.isValid(SubcategoryID)) {
        return null;
    }
    const subcategory = await SubcategoryModel.findOne({
        _id: SubcategoryID,
        IsDeleted: false
    })
    .populate("CategoryID")
    .lean();
    return await SubcategoryMapper(subcategory);
};
export default GetSubcategoryByID;
