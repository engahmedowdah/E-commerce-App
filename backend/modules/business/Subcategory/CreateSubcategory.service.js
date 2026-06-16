import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
const CreateSubcategory = async ({ Name, CategoryID, Description, Slug, IsActivated }) => {
    const exists = await SubcategoryModel.findOne({ Name, IsDeleted: false });
    if (exists) throw new Error("Subcategory already exists");
    const subcategory = await SubcategoryModel.create(
        {
            Name: Name,
            CategoryID: CategoryID,
            Description: Description,
            Slug: Slug,
            IsActivated: IsActivated || false,
            CreatedDate: Date.now(),
        }
    );
    return await SubcategoryMapper(subcategory);
};
export default CreateSubcategory;
