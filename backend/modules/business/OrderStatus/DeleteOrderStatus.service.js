import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import OrderStatusMapper from "./OrderStatusMapper.js";
const DeleteOrderStatus = async ({ OrderStatusID }) => {
    const orderStatus = await OrderStatusModel.findOne({ _id: OrderStatusID, IsDeleted: false });
    if (!orderStatus) throw new Error("Order status not found");
    const deleted = await SoftDeleteById(OrderStatusModel, OrderStatusID);
    return await OrderStatusMapper(deleted);
};
export default DeleteOrderStatus;
