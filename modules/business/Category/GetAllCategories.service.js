import { NotDeletedFilter } from "../../../shared/utils.js";
import CategoryModel from "../../data/Category/Category.model.js";

const GetAllCategories = async ({ includeDeleted = false }) => {
    try {
        const categories = await CategoryModel.find({ ...NotDeletedFilter(includeDeleted) });
        if (!categories) {
            throw new Error("Categories not found");
        }
        await Promise.all([
            categories.populate("CreatedBy"),
            categories.populate("UpdatedBy")
        ]);
        return categories;
    } catch (error) {
        throw error;
    }
};

export default GetAllCategories;
