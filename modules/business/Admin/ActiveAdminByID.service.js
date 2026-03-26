import AdminModel from "../../data/Admin/Admin.model.js";

const ActiveAdminByID = async ({ AdminID, UpdatedBy }) => {
  try {
    if (!AdminID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }

    const admin = await AdminModel.findById(AdminID);

    if (!admin) {
      throw new Error("Admin not found");
    }

    admin.IsActivated = !admin.IsActivated;
    admin.UpdatedBy = UpdatedBy;
    admin.UpdatedDate = new Date();

    await admin.save();

    await admin.populate("UserID");
    await admin.populate("RoleID");

    return admin;
  } catch (error) {
    throw "Error activating admin";
  }
};

export default ActiveAdminByID;