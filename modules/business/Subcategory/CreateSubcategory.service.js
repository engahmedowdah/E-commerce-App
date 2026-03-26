import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";

const CreateSubcategory = async ({ Name, CategoryID, Description, Slug, IsActivated, CreatedBy }) => {
    try {
        if (!Name || !CategoryID || !Slug || !CreatedBy) throw new Error("Missing required fields");
        const subcategory = await SubcategoryModel.create(
            {
                Name,
                CategoryID,
                Description,
                Slug,
                IsActivated: IsActivated || false,
                CreatedBy,
                CreatedDate: Date.now(),
            }
        );

        await subcategory.populate("CategoryID");
        
        return subcategory;
    } catch (error) {
        throw "Error creating subcategory";
    }
};

export default CreateSubcategory;
