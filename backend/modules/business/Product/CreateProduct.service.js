import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "./ProductMapper.js";
const CreateProduct = async ({ Name, Description, Price, Stock, CategoryIDs, SubCategoryIDs, CollectionIDs, ImageIDs, IsActivated }) => {
  const exists = await ProductModel.findOne({ Name, IsDeleted: false });
  if (exists) throw new Error("Product already exists");
  let product = await ProductModel.create({
    Name: Name,
    Description: Description,
    Price: Price,
    Stock: Stock,
    CategoryIDs: CategoryIDs,
    SubCategoryIDs: SubCategoryIDs,
    CollectionIDs: CollectionIDs,
    ImageIDs: ImageIDs,
    IsActivated: IsActivated || false,
    CreatedDate: new Date(),
  });
  if (!product) throw new Error("Product not created");
  return await ProductMapper(product);
};
export default CreateProduct;
