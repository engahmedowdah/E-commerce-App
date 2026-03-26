import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
const GetSubcategoryByID = async ({ SubcategoryID }) => {
    try {
        if (!SubcategoryID) throw new Error("Missing required fields");
        const subcategory = await SubcategoryModel.findOne(
            {
                _id: SubcategoryID,
                IsDeleted: false
            }).populate("CategoryID");
        return subcategory;
    } catch (error) {
        throw "Error getting subcategory";
    }
};
export default GetSubcategoryByID;
