import RoleModel from "../../data/Role/Role.model.js";

const UpdateRole = async ({ RoleID, Name, Permissions, Description, IsActivated, UpdatedBy }) => {
    try {
        if (!RoleID || !Name || !Permissions || !Description || !IsActivated || !UpdatedBy) throw new Error("Missing required fields");
        const role = await RoleModel.findById(RoleID);

        if (!role) throw new Error("Role not found");

        role.Name = Name;
        role.Permissions = Permissions;
        role.Description = Description;
        role.IsActivated = IsActivated;
        role.UpdatedBy = UpdatedBy;
        role.UpdatedDate = Date.now();

        await role.save();

        return role;
    } catch (error) {
        throw "Error updating role";
    }
};

export default UpdateRole;
