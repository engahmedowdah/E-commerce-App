import CartModel from "../../data/Cart/Cart.model.js";

const DeleteItemsFromCart = async ({ UserID, UpdatedBy }) => {
    try {
        if (!UserID || !UpdatedBy) {
            throw new Error("Missing required fields");
        }
        const cart = await CartModel.findOne({ UserID });
        if (!cart) return null;

        cart.Products = [];

        cart.TotalPrice = 0;

        cart.UpdatedBy = UpdatedBy;
        cart.UpdatedDate = Date.now();

        await cart.save();
        return cart;
    } catch (error) {
        throw "Error deleting items from cart";
    }
};
export default DeleteItemsFromCart;