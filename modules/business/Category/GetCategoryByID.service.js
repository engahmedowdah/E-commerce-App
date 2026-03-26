import CategoryModel from "../../data/Category/Category.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetCategoryByID = async ({ CategoryID, includeDeleted = false }) => {
    try {
        if (!CategoryID) {
            throw new Error("Missing required fields");
        }
        const category = await CategoryModel.findOne({ _id: CategoryID, ...NotDeletedFilter(includeDeleted) });
        return category;
    } catch (error) {
        throw "Error getting category by ID";
    }
};
export default GetCategoryByID;
