import UserModel from "../../data/User/User.model.js";
import UserMapper from "./UserMapper.js";
const GetAllUsers = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { FirstName: 1, LastName: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { FirstName: -1, LastName: -1 };
  const [users, totalItems, activeItems, inactiveItems] = await Promise.all([
    UserModel.find({ IsDeleted: false })
      .populate("LogoID")
      .sort(sortQuery)
      .lean()
      .skip(skip)
      .limit(limit),
    UserModel.countDocuments({ IsDeleted: false }),
    UserModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    UserModel.countDocuments({ IsDeleted: false, IsActivated: false }),
  ]);
  if (!users) throw new Error("Users not found");
  const mappedData = users.map(UserMapper);
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
export default GetAllUsers;
