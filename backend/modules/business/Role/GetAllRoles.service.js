import RoleModel from "../../data/Role/Role.model.js";
import RoleMapper from "./RoleMapper.js";
const GetAllRoles = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [roles, totalItems, activeItems, inactiveItems] = await Promise.all([
    RoleModel.find({ IsDeleted: false })
      .populate("Permissions")
      .sort(sortQuery)
      .lean()
      .skip(skip)
      .limit(limit),
    RoleModel.countDocuments({ IsDeleted: false }),
    RoleModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    RoleModel.countDocuments({ IsDeleted: false, IsActivated: false }),
  ]);
  if (!roles) throw new Error("Roles not found");
  const mappedData = roles.map(RoleMapper);
  const totalPermissions = mappedData.reduce((acc, role) => acc + role.Permissions.length, 0);
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
        totalPermissions,
        avgPermissions: totalPermissions / totalItems
      },
    },
  };
};
export default GetAllRoles;
