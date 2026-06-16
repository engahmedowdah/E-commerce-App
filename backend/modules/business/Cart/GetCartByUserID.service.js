import CartModel from "../../data/Cart/Cart.model.js";
import CartMapper from "./CartMapper.js";
const GetCartByUserID = async ({ UserID, page = 1, limit = 10, sort = "newest" }) => {
    const skip = (page - 1) * limit;
    let sortQuery = {};
    if (sort === "price_asc")
        sortQuery = { TotalPrice: 1 };
    else if (sort === "price_desc")
        sortQuery = { TotalPrice: -1 };
    else if (sort === "a_z" || sort === "name_asc")
        sortQuery = { "User.UserName": 1 };
    else if (sort === "z_a" || sort === "name_desc")
        sortQuery = { "User.UserName": -1 };
    const cart = await CartModel.findOne({ UserID: UserID })
        .populate("UserID")
        .populate("Products.ProductID")
        .sort(sortQuery)
        .skip(skip)
        .limit(limit)
        .lean();
    if (!cart) return null;
    const totalItems = await CartModel.countDocuments({ UserID: UserID });
    const totalProducts = cart.Products.length;
    const avgProducts = cart.Products.reduce((acc, product) => acc + product.Quantity, 0) / cart.Products.length;
    return {
        data: CartMapper(cart),
        meta: {
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
            limit,
            stats: {
                totalItems,
                totalProducts,
                avgProducts
            }
        }
    };
};
export default GetCartByUserID;
