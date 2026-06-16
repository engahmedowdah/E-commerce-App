import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "./ProductMapper.js";
const ActiveProductByID = async ({ ProductID }) => {
    const product = await ProductModel.findOne({ _id: ProductID, IsDeleted: false });
    if (!product) throw new Error("Product not found");
    const updatedDoc = await ProductModel.findOneAndUpdate(
        { _id: ProductID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    ).lean();
    return await ProductMapper(updatedDoc);
};
export default ActiveProductByID;
