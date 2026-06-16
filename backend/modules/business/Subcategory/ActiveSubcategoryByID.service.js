import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
const ActiveSubcategoryByID = async ({ SubcategoryID }) => {
    const subcategory = await SubcategoryModel.findOne({ _id: SubcategoryID, IsDeleted: false });
    if (!subcategory) throw new Error("Subcategory not found");
    const updatedDoc = await SubcategoryModel.findOneAndUpdate(
        { _id: SubcategoryID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    ).lean();
    if (!updatedDoc) throw new Error("Subcategory not updated");
    return await SubcategoryMapper(updatedDoc);
};
export default ActiveSubcategoryByID;
