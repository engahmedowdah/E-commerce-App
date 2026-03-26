import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
const CreateOrderStatus = async ({ Name, CreatedBy, IsActivated = false }) => {
  try {
    if (!Name || !CreatedBy) throw new Error("Missing required fields");
    const orderStatus = await OrderStatusModel.create({
      Name,
      IsActivated: IsActivated || false,
      CreatedBy,
      CreatedDate: Date.now(),
    });
    return orderStatus;
  } catch (error) {
    throw "Error creating order status";
  }
};
export default CreateOrderStatus;
