import AdminModel from "../../data/Admin/Admin.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";

const GetAllAdmins = async ({ includeDeleted = false }) => {
  try {
    const admins = await AdminModel.find(
      { ...NotDeletedFilter(includeDeleted) }
    );

    if (!admins) {
      throw new Error("Admins not found");
    }

    await Promise.all([
      admins.populate("UserID"),
      admins.populate("RoleID"),
    ]);

    return admins;
  } catch (error) {
    throw "Error getting all admins";
  }
};

export default GetAllAdmins;
