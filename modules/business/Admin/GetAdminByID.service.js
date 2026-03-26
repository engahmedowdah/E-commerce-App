import AdminModel from "../../data/Admin/Admin.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAdminByID = async ({ AdminID, includeDeleted = false }) => {
  try {
    if (!AdminID) {
      throw new Error("Missing required fields");
    }
    const admin = await AdminModel.findById(AdminID,
      { ...NotDeletedFilter(includeDeleted) }
    );

    await admin.populate("UserID");
    await admin.populate("RoleID");

    return admin;
  } catch (error) {
    throw "Error getting admin";
  }
};

export default GetAdminByID;
