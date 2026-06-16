import mongoose from "mongoose";
import CategoryModel from "../../data/Category/Category.model.js";
import CategoryMapper from "./CategoryMapper.js";
const GetCategoryByID = async ({ CategoryID }) => {
    if (!mongoose.Types.ObjectId.isValid(CategoryID)) {
        return null;
    }
    const category = await CategoryModel.findOne({ _id: CategoryID, IsDeleted: false })
    .lean();
    if (!category) throw new Error("Category not found");
    return await CategoryMapper(category);
};
export default GetCategoryByID;
