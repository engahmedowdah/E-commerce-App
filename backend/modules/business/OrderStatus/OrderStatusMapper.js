import OrderModel from "../../data/Order/Order.model.js";
import OrderMapper from "../Order/OrderMapper.js";
const OrderStatusMapper = async (orderStatus) => {
  if (!orderStatus) return null;
  const orderStatusObj = typeof orderStatus.toObject === "function" ? orderStatus.toObject() : orderStatus;
  const orders = await OrderModel.find({
    OrderStatusID: orderStatusObj._id,
  })
  .populate("UserID AddressID PaymentID OrderStatusID Items.ProductID")
  .lean();
  const enrichedOrders = await Promise.all(orders.map(OrderMapper));
  return {
    ...orderStatusObj,
    Orders: enrichedOrders || [],
  };
};
export default OrderStatusMapper;
