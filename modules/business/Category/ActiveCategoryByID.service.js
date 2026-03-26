import CategoryModel from "../../data/Category/Category.model.js";

const ActiveCategoryByID = async ({ CategoryID, UpdatedBy }) => {
  try {
    if (!CategoryID) throw new Error("Category ID is required");
    const category = await CategoryModel.findById(CategoryID);

    if (!category) {
      throw new Error("Category not found");
    }

    category.IsActivated = !category.IsActivated;
    category.UpdatedBy = UpdatedBy;
    category.UpdatedDate = new Date();

    await category.save();
    await category.populate([
      { path: "CreatedBy" },
      { path: "UpdatedBy" }
    ]);

    return category;
  } catch (error) {
    throw "Error activating category";
  }
};

export default ActiveCategoryByID;
