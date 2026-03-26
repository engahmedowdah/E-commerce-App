import ProductModel from "../../data/Product/Product.model.js";
const CreateProduct = async ({ Name, Description, Price, Stock, CategoryID, CollectionID, Images, IsActive, CreatedBy }) => {
  try {
    if (!Name || !Price || !Stock || !CategoryID || !CollectionID || !Images || !CreatedBy) throw new Error("Missing required fields");
    const product = await ProductModel.create({
      Name,
      Description,
      Price,
      Stock,
      CategoryID,
      CollectionID,
      Images,
      IsActive: IsActive || false,
      CreatedBy,
      CreatedDate: Date.now(),
    });
    return product;
  } catch (error) {
    throw "Error creating product";
  }
};
export default CreateProduct;
