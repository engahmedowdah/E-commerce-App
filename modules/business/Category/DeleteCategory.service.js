import CategoryModel from "../../data/Category/Category.model.js";
const DeleteCategory = async ({ CategoryID, UpdatedBy }) => {
  try {
    if (!CategoryID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const category = await CategoryModel.findById(CategoryID);
    if (!category) {
      throw new Error("Category not found");
    }

    category.IsDeleted = true;
    category.IsActivated = false;
    category.UpdatedBy = UpdatedBy;
    category.UpdatedDate = new Date();

    await category.save();
    return category;
  } catch (error) {
    throw "Error deleting category";
  }
};
export default DeleteCategory;
