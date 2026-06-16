import AdminModel from "../../data/Admin/Admin.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import AdminMapper from "./AdminMapper.js";
const DeleteAdmin = async ({ AdminID }) => {
    const deletedAdmin = await SoftDeleteById(AdminModel, AdminID);
    const populated = await deletedAdmin.populate([
      { path: "RoleID", populate: { path: "Permissions" } },
      { path: "ImageID" },
    ]);
    return await AdminMapper(populated);
};
export default DeleteAdmin;
