import CategoryModel from "../../data/Category/Category.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetCategoryBySlug = async ({ slug, includeDeleted = false }) => {
    try {
        if (!slug) {
            throw new Error("Missing required fields");
        }
        const category = await CategoryModel.findOne({
            Slug: slug,
            ...NotDeletedFilter(includeDeleted),
        });
        if (!category) {
            throw new Error("Category not found");
        }
        if (!category.IsActivated) {
            throw new Error("Category is not active");
        }
        return category;
    } catch (error) {
        console.error("GetCategoryBySlug Error:", error.message);
        throw error;
    }
};
export default GetCategoryBySlug;
