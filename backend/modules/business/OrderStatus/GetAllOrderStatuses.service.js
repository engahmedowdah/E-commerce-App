import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
import OrderStatusMapper from "./OrderStatusMapper.js";
const GetAllOrderStatuses = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [orderStatuses, totalItems, activeItems, inactiveItems] = await Promise.all([
    OrderStatusModel.find({ IsDeleted: false }).sort(sortQuery).lean().skip(skip).limit(limit),
    OrderStatusModel.countDocuments({ IsDeleted: false }),
    OrderStatusModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    OrderStatusModel.countDocuments({ IsDeleted: false, IsActivated: false }),
  ]);
  if (!orderStatuses) throw new Error("Order statuses not found");
  const mappedData = await Promise.all(orderStatuses.map(OrderStatusMapper));
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
export default GetAllOrderStatuses;
