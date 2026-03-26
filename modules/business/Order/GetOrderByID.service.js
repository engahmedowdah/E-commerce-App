import { NotDeletedFilter } from "../../../shared/utils.js";
import OrderModel from "../../data/Order/Order.model.js";

const GetOrderByID = async ({ OrderID, includeDeleted = false }) => {
  try {
    if (!OrderID) throw new Error("OrderID is required");
    const order = await OrderModel.findOne({
      _id: OrderID,
      ...NotDeletedFilter(includeDeleted),
    });

    if (!order) throw new Error("Order not found");

    await order.populate([
      { path: "UserID" },
      { path: "AddressID" },
      { path: "PaymentID" },
      { path: "OrderStatusID" },
      { path: "Items.ProductID" }
    ]);

    return order;
  } catch (error) {
    throw "Error getting order by ID";
  }
};

export default GetOrderByID;
