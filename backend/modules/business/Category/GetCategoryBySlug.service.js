import CategoryModel from "../../data/Category/Category.model.js";
import CategoryMapper from "./CategoryMapper.js";
const GetCategoryBySlug = async ({ slug }) => {
    const category = await CategoryModel.findOne({
        Slug: slug,
        IsDeleted: false,
    })
    .lean();
    if (!category) throw new Error("Category not found");
    return await CategoryMapper(category);
};
export default GetCategoryBySlug;
