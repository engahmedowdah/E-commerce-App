import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "./ProductMapper.js";
const UpdateProduct = async ({ ProductID, Name, Description, Price, Stock, CategoryIDs, SubCategoryIDs, CollectionIDs, ImageIDs, IsActivated }) => {
  const updateFields = { UpdatedDate: new Date() };
  if (Name !== undefined)           updateFields.Name = Name;
  if (Description !== undefined)    updateFields.Description = Description;
  if (Price !== undefined)          updateFields.Price = Price;
  if (Stock !== undefined)          updateFields.Stock = Stock;
  if (CategoryIDs !== undefined)    updateFields.CategoryIDs = CategoryIDs;
  if (SubCategoryIDs !== undefined) updateFields.SubCategoryIDs = SubCategoryIDs;
  if (CollectionIDs !== undefined)  updateFields.CollectionIDs = CollectionIDs;
  if (ImageIDs !== undefined)       updateFields.ImageIDs = ImageIDs;
  if (IsActivated !== undefined)    updateFields.IsActivated = IsActivated;
  let product = await ProductModel.findOneAndUpdate(
    { _id: ProductID, IsDeleted: false },
    { $set: updateFields },
    { new: true }
  ).lean();
  if (!product) throw new Error("Product not updated");
  return await ProductMapper(product);
};
export default UpdateProduct;
