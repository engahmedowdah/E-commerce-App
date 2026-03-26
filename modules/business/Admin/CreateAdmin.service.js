import AdminModel from "../../data/Admin/Admin.model.js";

const CreateAdmin = async ({ UserID, RoleID, IsActivated, CreatedBy }) => {
  try {
    if (!UserID || !RoleID || !CreatedBy) {
      throw new Error("Missing required fields");
    }

    const admin = await AdminModel.create({
      UserID,
      RoleID,
      IsActivated: IsActivated || false,
      CreatedBy,
      CreatedDate: new Date(),
    });

    await admin.populate("UserID");
    await admin.populate("RoleID");

    return admin;
  } catch (error) {
    throw "Error creating admin";
  }
};

export default CreateAdmin;
