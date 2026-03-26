import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
const DeleteSubcategory = async ({ SubcategoryID, UpdatedBy }) => {
    try {
        if (!SubcategoryID || !UpdatedBy) throw new Error("Missing required fields");
        const subcategory = await SubcategoryModel.findById(SubcategoryID);

        if (!subcategory) throw new Error("Subcategory not found");

        subcategory.IsActivated = false;
        subcategory.IsDeleted = true;
        subcategory.UpdatedBy = UpdatedBy;
        subcategory.UpdatedDate = Date.now();

        await subcategory.save();

        return subcategory;
    } catch (error) {
        throw "Error deleting subcategory";
    }
};
export default DeleteSubcategory;
