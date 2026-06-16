import CategoryModel from "../../data/Category/Category.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import CategoryMapper from "./CategoryMapper.js";
const DeleteCategory = async ({ CategoryID }) => {
    const deleted = await SoftDeleteById(CategoryModel, CategoryID);
    if (!deleted) throw new Error("Category not found");
    return await CategoryMapper(deleted);
};
export default DeleteCategory;
