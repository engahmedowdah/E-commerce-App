import PermissionModel from "../../data/Permission/Permission.model.js";
import PermissionMapper from "./PermissionMapper.js";
const GetAllPermissions = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [permissions, totalItems, activeItems, inactiveItems] = await Promise.all([
    PermissionModel.find({ IsDeleted: { $ne: true } })
      .sort(sortQuery)
      .lean()
      .skip(skip)
      .limit(limit),
    PermissionModel.countDocuments({ IsDeleted: { $ne: true } }),
    PermissionModel.countDocuments({ IsDeleted: { $ne: true }, IsActivated: true }),
    PermissionModel.countDocuments({ IsDeleted: { $ne: true }, IsActivated: false }),
  ]);
  if (!permissions) throw new Error("Permissions not found");
  const mappedData = permissions.map(PermissionMapper);
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
export default GetAllPermissions;
