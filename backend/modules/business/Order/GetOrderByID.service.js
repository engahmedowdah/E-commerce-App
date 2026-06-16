import mongoose from "mongoose";
import OrderModel from "../../data/Order/Order.model.js";
import OrderMapper from "./OrderMapper.js";
const GetOrderByID = async ({ OrderID }) => {
  if (!mongoose.Types.ObjectId.isValid(OrderID)) {
    return null;
  }
  const order = await OrderModel.findOne({
    _id: OrderID,
  })
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
        { path: "PaymentStatusID" },
        { path: "CurrencySymbolID" }
      ]
    },
    { path: "OrderStatusID" },
    { path: "Items.ProductID" }
  ])
  .lean();
  return await OrderMapper(order);
};
export default GetOrderByID;
