import AdminModel from "../../data/Admin/Admin.model.js";
import AdminMapper from "./AdminMapper.js";
const GetAdminByID = async ({ AdminID }) => {
  const admin = await AdminModel.findOne({ _id: AdminID, IsDeleted: false })
    .populate({
      path: "RoleID",
      populate: { path: "Permissions" }
    })
    .populate("ImageID")
    .lean();
  return await AdminMapper(admin);
};
export default GetAdminByID;
