import CartModel from "../../data/Cart/Cart.model.js";
const GetCartProductsByUserID = async ({ UserID }) => {
    try {
        if (!UserID) {
            throw new Error("Missing required fields");
        }
        const cart = await CartModel.findOne({ UserID })
            .populate("Products.ProductID");
        return cart ? cart.Products : [];
    } catch (error) {
        throw "Error getting cart products by user ID";
    }
};
export default GetCartProductsByUserID;
