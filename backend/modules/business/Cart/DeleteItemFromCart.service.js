import CartModel from "../../data/Cart/Cart.model.js";
import ProductModel from "../../data/Product/Product.model.js";
import CartMapper from "./CartMapper.js";
const DeleteItemFromCart = async ({ UserID, ProductID }) => {
    const cart = await CartModel.findOne({ UserID });
    if (!cart) return null;
    const initialLength = cart.Products.length;
    cart.Products = cart.Products.filter(
        (p) => p.ProductID.toString() !== ProductID && p._id.toString() !== ProductID,
    );
    if (cart.Products.length === initialLength) {
        throw new Error("Item not found in cart");
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
export default DeleteItemFromCart;
