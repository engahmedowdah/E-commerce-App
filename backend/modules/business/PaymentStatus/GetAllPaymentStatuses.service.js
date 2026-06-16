import PaymentStatusModel from "../../data/PaymentStatus/PaymentStatus.model.js";
import PaymentStatusMapper from "./PaymentStatusMapper.js";
const GetAllPaymentStatuses = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [paymentStatuses, totalItems, activeItems, inactiveItems] = await Promise.all([
    PaymentStatusModel.find({ IsDeleted: false })
      .sort(sortQuery)
      .lean()
      .skip(skip)
      .limit(limit),
    PaymentStatusModel.countDocuments({ IsDeleted: false }),
    PaymentStatusModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    PaymentStatusModel.countDocuments({ IsDeleted: false, IsActivated: false }),
  ]);
  if (!paymentStatuses) throw new Error("Payment statuses not found");
  const mappedData = paymentStatuses.map(PaymentStatusMapper);
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit,
      stats: {
        totalItems,
        activeItems,
        inactiveItems,
      },
    },
  };
};
export default GetAllPaymentStatuses;
