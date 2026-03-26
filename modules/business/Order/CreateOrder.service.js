import OrderModel from "../../data/Order/Order.model.js";

const CreateOrder = async ({ UserID, Items, AddressID, PaymentID, OrderStatusID, CreatedBy }) => {
  try {
    if (!UserID || !Items || !AddressID || !PaymentID || !OrderStatusID) {
      throw new Error("UserID, Items, AddressID, PaymentID, and OrderStatusID are required");
    }
    const order = await OrderModel.create({
      UserID,
      Items,
      AddressID,
      PaymentID,
      OrderStatusID,
      CreatedBy,
      CreatedDate: new Date(),
    });

    await order.populate([
      { path: "UserID" },
      { path: "AddressID" },
      { path: "PaymentID" },
      { path: "OrderStatusID" },
      { path: "Items.ProductID" }
    ]);

    return order;
  } catch (error) {
    throw error.message || "Error creating order";
  }
};

export default CreateOrder;
