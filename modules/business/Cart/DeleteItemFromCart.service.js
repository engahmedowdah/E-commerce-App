import CartModel from "../../data/Cart/Cart.model.js";
import ProductModel from "../../data/Product/Product.model.js";

const DeleteItemFromCart = async ({ UserID, ProductID, UpdatedBy }) => {
    try {
        if (!UserID || !ProductID || !UpdatedBy) {
            throw new Error("Missing required fields");
        }
        const cart = await CartModel.findOne({ UserID });
        if (!cart) return null;

        cart.Products = cart.Products.filter(
            (p) => p.ProductID.toString() !== ProductID,
        );

        const productIds = cart.Products.map((p) => p.ProductID);
        const products = await ProductModel.find({ _id: { $in: productIds } });

        cart.TotalPrice = cart.Products.reduce((total, item) => {
            const product = products.find(
                (p) => p._id.toString() === item.ProductID.toString(),
            );
            return total + (product ? product.Price * item.Quantity : 0);
        }, 0);

        cart.UpdatedBy = UpdatedBy;
        cart.UpdatedDate = Date.now();

        await cart.save();
        return cart;
    } catch (error) {
        throw "Error deleting item from cart";
    }
};
export default DeleteItemFromCart;
