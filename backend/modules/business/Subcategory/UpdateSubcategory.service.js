import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
const UpdateSubcategory = async ({ SubcategoryID, Name, CategoryID, Description, Slug, IsActivated }) => {
    const subcategory = await SubcategoryModel.findOne({ _id: SubcategoryID, IsDeleted: false });
    if (!subcategory) throw new Error("Subcategory not found");
    const updatedSubcategory = await SubcategoryModel.findOneAndUpdate({ _id: SubcategoryID, IsDeleted: false }, { Name, CategoryID, Description, Slug, IsActivated, UpdatedDate: Date.now() }, { new: true }).lean();
    if (!updatedSubcategory) throw new Error("Subcategory not updated");
    return await SubcategoryMapper(updatedSubcategory);
}
export default UpdateSubcategory;
