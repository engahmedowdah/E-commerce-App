import OrderModel from "../../data/Order/Order.model.js";
import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
import PaymentModel from "../../data/Payment/Payment.model.js";
import OrderMapper from "./OrderMapper.js";
const GetAllOrders = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const pageNum = parseInt(page, 10) || 1;
  const limitNum = parseInt(limit, 10) || 10;
  const skip = (pageNum - 1) * limitNum;
  let sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  else if (sort === "total_amount_asc" || sort === "price_asc") sortQuery = { "PaymentDoc.Amount": 1 };
  else if (sort === "total_amount_desc" || sort === "price_desc") sortQuery = { "PaymentDoc.Amount": -1 };
  else if (sort === "a_z" || sort === "name_asc") sortQuery = { "UserDoc.FirstName": 1, "UserDoc.LastName": 1 };
  else if (sort === "z_a" || sort === "name_desc") sortQuery = { "UserDoc.FirstName": -1, "UserDoc.LastName": -1 };
  const pipeline = [];
  if (sort === "a_z" || sort === "name_asc" || sort === "z_a" || sort === "name_desc") {
    pipeline.push({
      $lookup: {
        from: "Users",
        localField: "UserID",
        foreignField: "_id",
        as: "UserDoc",
      },
    });
    pipeline.push({
      $unwind: {
        path: "$UserDoc",
        preserveNullAndEmptyArrays: true,
      },
    });
  }
  if (sort === "total_amount_asc" || sort === "total_amount_desc" || sort === "price_asc" || sort === "price_desc") {
    pipeline.push({
      $lookup: {
        from: "Payments",
        localField: "PaymentID",
        foreignField: "_id",
        as: "PaymentDoc",
      },
    });
    pipeline.push({
      $unwind: {
        path: "$PaymentDoc",
        preserveNullAndEmptyArrays: true,
      },
    });
  }
  pipeline.push({ $sort: sortQuery });
  pipeline.push({ $skip: skip });
  pipeline.push({ $limit: limitNum });
  const [orders, totalItems, orderStatuses, itemsAgg, paymentAgg] = await Promise.all([
    OrderModel.aggregate(pipeline),
    OrderModel.countDocuments(),
    OrderStatusModel.find({}).lean(),
    OrderModel.aggregate([
      { $project: { itemCount: { $size: { $ifNull: ["$Items", []] } } } },
      { $group: { _id: null, totalItems: { $sum: "$itemCount" }, totalOrders: { $sum: 1 } } },
    ]),
    PaymentModel.aggregate([
      { $group: { _id: null, totalAmount: { $sum: "$Amount" } } },
    ]),
  ]);
  if (!orders) throw new Error("Orders not found");
  const populatedOrders = await OrderModel.populate(orders, [
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
  ]);
  const mappedOrders = await Promise.all(populatedOrders.map(OrderMapper));
  const statusCounts = {};
  for (const status of orderStatuses) {
    statusCounts[status.Name] = await OrderModel.countDocuments({ OrderStatusID: status._id });
  }
  const aggResult = itemsAgg[0];
  const totalOrderItems = aggResult?.totalItems ?? 0;
  const avgItems = totalItems > 0 ? parseFloat((totalOrderItems / totalItems).toFixed(2)) : 0;
  const totalAmount = paymentAgg[0]?.totalAmount ?? 0;
  return {
    data: mappedOrders,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit,
      stats: {
        totalItems,
        avgProducts: avgItems,
        totalProducts: totalOrderItems,
        totalAmount,
        statusCounts,
      },
    },
  };
};
export default GetAllOrders;
