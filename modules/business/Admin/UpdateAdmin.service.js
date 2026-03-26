import AdminModel from "../../data/Admin/Admin.model.js";

const UpdateAdmin = async ({ AdminID }, { RoleID, UpdatedBy }) => {
  try {
    if (!AdminID) {
      throw new Error("Missing required fields");
    }
    const admin = await AdminModel.findById(AdminID);
    if (!admin) {
      throw new Error("Admin not found");
    }
    if (!RoleID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }

    const updatedAdmin = await AdminModel.findByIdAndUpdate(AdminID,
      {
        RoleID,
        UpdatedBy,
        UpdatedDate: new Date(),
      }
    );

    await updatedAdmin.populate("UserID");
    await updatedAdmin.populate("RoleID");

    return updatedAdmin;
  } catch (error) {
    throw "Error updating admin";
  }
};

export default UpdateAdmin;