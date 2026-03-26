import AdminModel from "../../data/Admin/Admin.model.js";

const DeleteAdmin = async ({ AdminID, UpdatedBy }) => {
  try {
    if (!AdminID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const admin = await AdminModel.findByIdAndUpdate(AdminID,
      {
        IsDeleted: true,
        UpdatedBy,
        UpdatedDate: new Date()
      }, { new: true });

    await admin.populate("UserID");
    await admin.populate("RoleID");

    return admin;
  } catch (error) {
    throw "Error deleting admin";
  }
};

export default DeleteAdmin;
