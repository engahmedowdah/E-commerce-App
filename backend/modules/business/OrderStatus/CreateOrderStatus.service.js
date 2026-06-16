import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
import OrderStatusMapper from "./OrderStatusMapper.js";
const CreateOrderStatus = async ({ Name, IsActivated = false }) => {
  const existingOrderStatus = await OrderStatusModel.findOne({ Name, IsDeleted: false });
  if (existingOrderStatus) {
    throw new Error("Order status already exists");
  }
  const orderStatus = await OrderStatusModel.create({
    Name: Name,
    IsActivated: IsActivated || false,
    CreatedDate: Date.now(),
  });
  if (!orderStatus) throw new Error("Order status not created");
  return await OrderStatusMapper(orderStatus);
};
export default CreateOrderStatus;
