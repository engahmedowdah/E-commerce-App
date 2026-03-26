import CategoryModel from "../../data/Category/Category.model.js";

const UpdateCategory = async ({ CategoryID, Name, Slug, Description, IsActivated, UpdatedBy }) => {
    try {
        if (!CategoryID) throw new Error("Category ID is required");
        const category = await CategoryModel.findByIdAndUpdate(
            CategoryID,
            {
                Name,
                Slug,
                Description,
                IsActivated,
                UpdatedBy,
                UpdatedDate: new Date(),
            },
            { new: true }
        );
        if (!category) {
            throw new Error("Category not found");
        }
        await category.populate([
            { path: "CreatedBy" },
            { path: "UpdatedBy" }
        ]);
        return category;
    } catch (error) {
        throw error;
    }
};

export default UpdateCategory;
