import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
const DeleteSubcategory = async ({ SubcategoryID }) => {
    const subcategory = await SubcategoryModel.findOne({ _id: SubcategoryID, IsDeleted: false });
    if (!subcategory) throw new Error("Subcategory not found");
    const deletedSubcategory = await SoftDeleteById(SubcategoryModel, SubcategoryID);
    if (!deletedSubcategory) throw new Error("Subcategory not deleted");
    return await SubcategoryMapper(deletedSubcategory);
};
export default DeleteSubcategory;
