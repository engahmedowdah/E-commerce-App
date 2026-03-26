import OrderModel from "../../data/Order/Order.model.js";
const GetOrderHistory = async ({ UserID }) => {
  try {
    if (!UserID) throw new Error("Missing required fields");
    const orders = await OrderModel.find({ UserID })
      .populate("AddressID")
      .populate("PaymentID")
      .populate("OrderStatusID");
    if (!orders) throw new Error("Orders not found");
    return orders;
  } catch (error) {
    throw "Error getting order history";
  }
};
export default GetOrderHistory;
