import PermissionModel from "../../data/Permission/Permission.model.js";
const UpdatePermission = async ({ PermissionID, Name, Description, UpdatedBy }) => {
    try {
        if (!PermissionID || !Name || !UpdatedBy) throw new Error("Missing required fields");
        const permission = await PermissionModel.findById(PermissionID);
        if (!permission) throw new Error("Permission not found");

        permission.Name = Name;
        permission.Description = Description;
        permission.UpdatedBy = UpdatedBy;
        permission.UpdatedDate = Date.now();

        await permission.save();

        return permission;
    } catch (error) {
        throw "Error updating permission";
    }
};
export default UpdatePermission;
