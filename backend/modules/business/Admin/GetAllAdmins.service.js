import AdminModel from "../../data/Admin/Admin.model.js";
import AdminMapper from "./AdminMapper.js";
const GetAllAdmins = async ({ page = 1, limit = 20, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { FirstName: 1, LastName: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { FirstName: -1, LastName: -1 };
  const [admins, totalItems, activeItems, inactiveItems] = await Promise.all([
    AdminModel.find({ IsDeleted: false })
      .populate({
        path: "RoleID",
        populate: { path: "Permissions" }
      })
      .populate("ImageID")
      .sort(sortQuery)
      .skip(skip)
      .limit(limit)
      .lean(),
    AdminModel.countDocuments({ IsDeleted: false }),
    AdminModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    AdminModel.countDocuments({ IsDeleted: false, IsActivated: false }),
  ]);
  const mappedAdmins = await Promise.all(admins.map(AdminMapper));
  return {
    data: mappedAdmins,
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
export default GetAllAdmins;
