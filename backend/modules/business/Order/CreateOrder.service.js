import OrderModel from "../../data/Order/Order.model.js";
import OrderMapper from "./OrderMapper.js";
const CreateOrder = async ({ UserID, Items, AddressID, PaymentID, OrderStatusID }) => {
  const order = await OrderModel.create({
    UserID: UserID,
    Items: Items,
    AddressID: AddressID,
    PaymentID: PaymentID,
    OrderStatusID: OrderStatusID,
    CreatedDate: new Date(),
  });
  if (!order) throw new Error("Order not created");
  await order.populate([
    { path: "UserID" },
    {
      path: "AddressID",
      populate: [
        { path: "CityID" },
        { path: "CountryID" }
      ]
    },
    { path: "PaymentID" },
    { path: "OrderStatusID" },
    { path: "Items.ProductID" }
  ]);
  return await OrderMapper(order);
};
export default CreateOrder;
