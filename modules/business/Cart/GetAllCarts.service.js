import CartModel from "../../data/Cart/Cart.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAllCarts = async ({ includeDeleted = false }) => {
    try {
        const carts = await CartModel.find({ ...NotDeletedFilter(includeDeleted) })
            .populate("Products.ProductID");
        return carts;
    } catch (error) {
        throw "Error getting all carts";
    }
};
export default GetAllCarts;
