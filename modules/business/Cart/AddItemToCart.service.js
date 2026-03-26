import CartModel from "../../data/Cart/Cart.model.js";
import ProductModel from "../../data/Product/Product.model.js";
const AddItemToCart = async ({ UserID, ProductID, Quantity, CreatedBy }) => {
  try {
    if (!UserID || !ProductID || !Quantity || !CreatedBy) {
      throw new Error("Missing required fields");
    }

    let cart = await CartModel.findOne({ UserID });
    if (!cart) {
      cart = await CartModel.create({
        UserID,
        Products: [],
        TotalPrice: 0,
        CreatedBy,
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
        ProductID,
        Quantity,
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

    cart.UpdatedBy = CreatedBy;
    cart.UpdatedDate = Date.now();

    await cart.save();
    return cart;
  } catch (error) {
    throw "Error adding item to cart";
  }
};
export default AddItemToCart;
