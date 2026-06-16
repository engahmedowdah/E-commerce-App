import CartModel from "../../data/Cart/Cart.model.js";
import CartMapper from "./CartMapper.js";
const DeleteItemsFromCart = async ({ UserID }) => {
    const deleted = await CartModel.findOneAndUpdate(
        { UserID },
        { $set: { Products: [], TotalPrice: 0 } },
        { new: true }
    )
    .populate("UserID")
    .populate("Products.ProductID")
    .lean();
    return await CartMapper(deleted);
};
export default DeleteItemsFromCart;
