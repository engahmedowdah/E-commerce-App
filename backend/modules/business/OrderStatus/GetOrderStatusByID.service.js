import mongoose from "mongoose";
import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
import OrderStatusMapper from "./OrderStatusMapper.js";
const GetOrderStatusByID = async ({ OrderStatusID }) => {
    if (!mongoose.Types.ObjectId.isValid(OrderStatusID)) {
        return null;
    }
    const orderStatus = await OrderStatusModel.findOne({ _id: OrderStatusID, IsDeleted: false }).lean();
    return await OrderStatusMapper(orderStatus);
};
export default GetOrderStatusByID;
