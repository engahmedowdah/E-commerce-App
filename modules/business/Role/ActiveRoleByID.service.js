import RoleModel from "../../data/Role/Role.model.js";
const ActiveRoleByID = async ({ RoleID, UpdatedBy }) => {
  try {
    if (!RoleID || !UpdatedBy) throw new Error("Missing required fields");
    const role = await RoleModel.findById(RoleID);

    if (!role) throw new Error("Role not found");

    role.IsActivated = !role.IsActivated;
    role.UpdatedBy = UpdatedBy;
    role.UpdatedDate = Date.now();

    await role.save();

    return role;
  } catch (error) {
    throw "Error activating role";
  }
};
export default ActiveRoleByID;
