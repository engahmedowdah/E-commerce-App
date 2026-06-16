import CartModel from "../../data/Cart/Cart.model.js";
import ProductModel from "../../data/Product/Product.model.js";
import CartMapper from "./CartMapper.js";
const AddItemToCart = async ({ UserID, ProductID, Quantity }) => {
  let cart = await CartModel.findOne({ UserID });
  if (!cart) {
    cart = await CartModel.create({
      UserID: UserID,
      Products: [],
      TotalPrice: 0,
      CreatedDate: new Date(),
    });
  }
  const existingItem = cart.Products.find(
    (item) => item.ProductID.toString() === ProductID.toString(),
  );
  if (existingItem) {
    existingItem.Quantity += Quantity;
  } else {
    cart.Products.push({
      ProductID: ProductID,
      Quantity: Quantity,
    });
  }
  const productIds = cart.Products.map((p) => p.ProductID);
  const products = await ProductModel.find({ _id: { $in: productIds } });
  cart.TotalPrice = cart.Products.reduce((total, item) => {
    const product = products.find(
      (p) => p._id.toString() === item.ProductID.toString(),
    );
    return total + (product ? product.Price * item.Quantity : 0);
  }, 0);
  cart.UpdatedDate = Date.now();
  await cart.save();
  const populated = await cart.populate([
    { path: "UserID" },
    { path: "Products.ProductID" }
  ]);
  return CartMapper(populated);
};
export default AddItemToCart;
