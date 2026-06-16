import CategoryModel from "../../data/Category/Category.model.js";
import CategoryMapper from "./CategoryMapper.js";
const UpdateCategory = async ({ CategoryID, Name, Slug, Description, IsActivated }) => {
    const category = await CategoryModel.findOne({ _id: CategoryID, IsDeleted: false });
    if (!category) throw new Error("Category not found");
    const existingCategory = await CategoryModel.findOne({ Name, IsDeleted: false });
    if (existingCategory && existingCategory._id.toString() !== CategoryID) {
        throw new Error("Category already exists");
    }
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
        CategoryID,
        {
            Name: Name,
            Slug: Slug,
            Description: Description,
            IsActivated: IsActivated,
            UpdatedDate: new Date(),
        },
        {
            new: true
        })
        .lean();
    return await CategoryMapper(updatedCategory);
};
export default UpdateCategory;
