import PaymentModel from "../../data/Payment/Payment.model.js";
import PaymentMapper from "./PaymentMapper.js";
const GetAllPaymentsByUserID = async ({ UserID, page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "amount_asc") sortQuery = { Amount: 1 };
  if (sort === "amount_desc") sortQuery = { Amount: -1 };
  const [payments, totalItems, totalAmountAgg] = await Promise.all([
    PaymentModel.find({ UserID: UserID })
    .populate("UserID")
    .populate("CurrencySymbolID")
    .populate("PaymentMethodID")
    .populate("PaymentStatusID")
    .sort(sortQuery)
    .lean()
    .skip(skip)
    .limit(limit),
    PaymentModel.countDocuments({ UserID: UserID }),
    PaymentModel.aggregate([
      { $match: { UserID: UserID } },
      { $group: { _id: null, totalAmount: { $sum: "$Amount" }, count: { $sum: 1 } } }
    ])
  ]);
  if (!payments) throw new Error("Payments not found");
  const mappedData = await Promise.all(payments.map(PaymentMapper));
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit,
      stats: {
        totalAmount: totalAmountAgg[0]?.totalAmount || 0,
      },
    },
  };
};
export default GetAllPaymentsByUserID;
