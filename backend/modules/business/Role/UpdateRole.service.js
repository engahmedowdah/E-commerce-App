import RoleModel from "../../data/Role/Role.model.js";
const UpdateRole = async ({ RoleID, Name, Permissions, Description, IsActivated }) => {
    const role = await RoleModel.findOne({ _id: RoleID, IsDeleted: false });
    if (!role) throw new Error("Role not found");
    const updatedRole = await RoleModel.findByIdAndUpdate(RoleID, { Name, Permissions, Description, IsActivated, UpdatedDate: Date.now() }, { new: true });
    if (!updatedRole) throw new Error("Role not updated");
    return updatedRole;
};
export default UpdateRole;
