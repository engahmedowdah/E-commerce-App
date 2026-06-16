import OrderModel from "../../data/Order/Order.model.js";
import OrderMapper from "./OrderMapper.js";
const GetOrdersHistory = async ({ UserID, page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { "User.FirstName": 1, "User.LastName": 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { "User.FirstName": -1, "User.LastName": -1 };
  if (sort === "total_amount_asc") sortQuery = { TotalAmount: 1 };
  if (sort === "total_amount_desc") sortQuery = { TotalAmount: -1 };
  const [orders, totalItems] = await Promise.all([
    OrderModel.find({ UserID: UserID })
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
    .sort(sortQuery)
    .lean()
    .skip(skip)
    .limit(limit),
    OrderModel.countDocuments({ UserID: UserID })
  ]);
  if (!orders) throw new Error("Orders not found");
  const mappedData = await Promise.all(orders.map(OrderMapper));
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit
    }
  };
};
export default GetOrdersHistory;
