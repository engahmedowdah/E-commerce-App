import { NotDeletedFilter } from "../../../shared/utils.js";
import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
const GetSubcategoriesByCategoryID = async ({ CategoryID, IncludeDeleted = false }) => {
    try {
        if (!CategoryID) throw new Error("Missing required fields");
        const subcategories = await SubcategoryModel.find(
            {
                CategoryID,
                ...NotDeletedFilter(IncludeDeleted)
            });
        return subcategories;
    } catch (error) {
        throw "Error getting subcategories";
    }
};
export default GetSubcategoriesByCategoryID;
