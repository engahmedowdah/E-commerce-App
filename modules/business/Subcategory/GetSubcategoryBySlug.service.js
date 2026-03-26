import { NotDeletedFilter } from "../../../shared/utils.js";
import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
const GetSubcategoryBySlug = async ({ slug, IncludeDeleted = false }) => {
    try {
        if (!slug) throw new Error("Missing required fields");
        const subcategory = await SubcategoryModel.findOne(
            {
                Slug: slug,
                ...NotDeletedFilter(IncludeDeleted)
            }).populate("CategoryID");
        return subcategory;
    } catch (error) {
        throw "Error getting subcategory";
    }
};
export default GetSubcategoryBySlug;
