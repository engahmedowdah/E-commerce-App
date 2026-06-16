import CategoryModel from "../../data/Category/Category.model.js";
import CategoryMapper from "./CategoryMapper.js";
const ActiveCategoryByID = async ({ CategoryID }) => {
    const category = await CategoryModel.findOne({ _id: CategoryID, IsDeleted: false });
    if (!category) throw new Error("Category not found");
    const updatedDoc = await CategoryModel.findOneAndUpdate(
        { _id: CategoryID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    return await CategoryMapper(updatedDoc);
};
export default ActiveCategoryByID;
