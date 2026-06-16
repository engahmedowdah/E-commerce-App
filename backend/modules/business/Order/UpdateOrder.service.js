import OrderModel from "../../data/Order/Order.model.js";
import OrderMapper from "./OrderMapper.js";
const UpdateOrder = async ({ OrderID, OrderStatusID }) => {
  const order = await OrderModel.findByIdAndUpdate(
    OrderID,
    {
      OrderStatusID: OrderStatusID,
      UpdatedDate: new Date(),
    },
    { new: true }
  )
  .populate([
    { path: "UserID" },
    {
      path: "AddressID",
      populate: [
        { path: "CityID" },
        { path: "CountryID" }
      ]
    },
    {
      path: "PaymentID",
      populate: [
        { path: "PaymentMethodID" },
        { path: "PaymentStatusID" }
      ]
    },
    { path: "OrderStatusID" },
    { path: "Items.ProductID" }
  ])
  .lean();
  if (!order) throw new Error("Order not updated");
  return await OrderMapper(order);
};
export default UpdateOrder;
