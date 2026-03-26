import RoleModel from "../../data/Role/Role.model.js";
const DeleteRole = async ({ RoleID, UpdatedBy }) => {
    try {
        if (!RoleID || !UpdatedBy) throw new Error("Missing required fields");
        const role = await RoleModel.findById(RoleID);

        if (!role) throw new Error("Role not found");

        role.IsDeleted = true;
        role.IsActivated = false;
        role.UpdatedBy = UpdatedBy;
        role.UpdatedDate = Date.now();

        await role.save();

        return role;
    } catch (error) {
        throw "Error deleting role";
    }
};
export default DeleteRole;
