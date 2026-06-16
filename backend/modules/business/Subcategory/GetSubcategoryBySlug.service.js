import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
const GetSubcategoryBySlug = async ({ Slug }) => {
    const subcategory = await SubcategoryModel.findOne(
        {
            Slug: Slug,
            IsDeleted: false
        }).lean();
    if (!subcategory) throw new Error("Subcategory not found");
    return await SubcategoryMapper(subcategory);
};
export default GetSubcategoryBySlug;
