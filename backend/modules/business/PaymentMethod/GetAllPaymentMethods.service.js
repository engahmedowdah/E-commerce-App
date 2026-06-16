import PaymentMethodModel from "../../data/PaymentMethod/PaymentMethod.model.js";
import PaymentMethodMapper from "./PaymentMethodMapper.js";
const GetAllPaymentMethods = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [paymentMethods, totalItems, activeItems, inactiveItems] = await Promise.all([
    PaymentMethodModel.find({ IsDeleted: false })
      .sort(sortQuery)
      .lean()
      .skip(skip)
      .limit(limit),
    PaymentMethodModel.countDocuments({ IsDeleted: false }),
    PaymentMethodModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    PaymentMethodModel.countDocuments({ IsDeleted: false, IsActivated: false }),
  ]);
  if (!paymentMethods) throw new Error("Payment methods not found");
  const mappedData = paymentMethods.map(PaymentMethodMapper);
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
export default GetAllPaymentMethods;
