import OrderModel from "../../data/Order/Order.model.js";

const UpdateOrderStatus = async (OrderID, OrderStatusID, UpdatedBy) => {
  try {
    if (!OrderID || !OrderStatusID) {
      throw new Error("OrderID and OrderStatusID are required");
    }
    const order = await OrderModel.findByIdAndUpdate(
      OrderID,
      {
        OrderStatusID,
        UpdatedBy,
        UpdatedDate: new Date(),
      },
      { new: true }
    );

    if (!order) {
      throw new Error("Order not found");
    }

    await order.populate([
      { path: "UserID" },
      { path: "AddressID" },
      { path: "PaymentID" },
      { path: "OrderStatusID" },
      { path: "Items.ProductID" }
    ]);

    return order;
  } catch (error) {
    throw "Error updating order status";
  }
};

export default UpdateOrderStatus;
