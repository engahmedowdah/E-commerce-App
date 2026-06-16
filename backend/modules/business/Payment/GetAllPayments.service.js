import PaymentModel from "../../data/Payment/Payment.model.js";
import PaymentMapper from "./PaymentMapper.js";
const GetAllPayments = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const pageNum = parseInt(page, 10) || 1;
  const limitNum = parseInt(limit, 10) || 10;
  const skip = (pageNum - 1) * limitNum;
  let sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  else if (sort === "a_z" || sort === "name_asc") sortQuery = { "UserDoc.FirstName": 1, "UserDoc.LastName": 1 };
  else if (sort === "z_a" || sort === "name_desc") sortQuery = { "UserDoc.FirstName": -1, "UserDoc.LastName": -1 };
  else if (sort === "amount_asc") sortQuery = { Amount: 1 };
  else if (sort === "amount_desc") sortQuery = { Amount: -1 };
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
  pipeline.push({ $sort: sortQuery });
  pipeline.push({ $skip: skip });
  pipeline.push({ $limit: limitNum });
  const [payments, totalItems, totalAmountAgg] = await Promise.all([
    PaymentModel.aggregate(pipeline),
    PaymentModel.countDocuments({ IsDeleted: { $ne: true } }),
    PaymentModel.aggregate([
      { $match: { IsDeleted: { $ne: true } } },
      { $group: { _id: null, total: { $sum: "$Amount" } } },
    ]),
  ]);
  if (!payments) throw new Error("Payments not found");
  const populatedPayments = await PaymentModel.populate(payments, [
    { path: "UserID" },
    { path: "PaymentMethodID" },
    { path: "PaymentStatusID" },
    { path: "CurrencySymbolID" }
  ]);
  const mappedData = populatedPayments.map(PaymentMapper);
  const totalAmount = totalAmountAgg[0]?.total ?? 0;
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limitNum),
      currentPage: pageNum,
      limit: limitNum,
      stats: {
        totalItems,
        activeItems: totalItems,
        inactiveItems: 0,
        totalAmount,
      },
    },
  };
};
export default GetAllPayments;
