import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";

const UpdateSubcategory = async ({ SubcategoryID, Name, CategoryID, Description, Slug, IsActivated, UpdatedBy }) => {
    try {
        if (!SubcategoryID || !Name || !CategoryID || !Description || !Slug || !IsActivated || !UpdatedBy) throw new Error("Missing required fields");
        const subcategory = await SubcategoryModel.findById(SubcategoryID);

        if (!subcategory) throw new Error("Subcategory not found");

        subcategory.Name = Name;
        subcategory.CategoryID = CategoryID;
        subcategory.Description = Description;
        subcategory.Slug = Slug;
        subcategory.IsActivated = IsActivated;
        subcategory.UpdatedBy = UpdatedBy;
        subcategory.UpdatedDate = Date.now();

        await subcategory.save();
        await subcategory.populate("CategoryID");

        return subcategory;
    } catch (error) {
        throw "Error updating subcategory";
    }
};
export default UpdateSubcategory;
