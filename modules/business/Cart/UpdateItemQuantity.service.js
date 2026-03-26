import CartModel from "../../data/Cart/Cart.model.js";
import ProductModel from "../../data/Product/Product.model.js";

const UpdateItemQuantity = async ({ UserID, ProductID, Quantity, UpdatedBy }) => {
    try {
        if (!UserID || !ProductID || !Quantity || !UpdatedBy) {
            throw new Error("Missing required fields");
        }
        const cart = await CartModel.findOne({ UserID });
        if (!cart) return null;

        const productIndex = cart.Products.findIndex(
            (p) => p.ProductID.toString() === ProductID,
        );
        if (productIndex === -1) return cart;

        if (Quantity <= 0) {
            cart.Products.splice(productIndex, 1);
        } else {
            cart.Products[productIndex].Quantity = Quantity;
        }

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
        throw "Error updating item quantity";
    }
};
export default UpdateItemQuantity;
