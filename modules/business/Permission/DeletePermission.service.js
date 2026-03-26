import PermissionModel from "../../data/Permission/Permission.model.js";

const DeletePermission = async ({ PermissionID, UpdatedBy }) => {
    try {
        if (!PermissionID || !UpdatedBy) throw new Error("Missing required fields");
        const permission = await PermissionModel.findById(PermissionID);
        if (!permission) throw new Error("Permission not found");

        permission.IsDeleted = true;
        permission.IsActivated = false;
        permission.UpdatedBy = UpdatedBy;
        permission.UpdatedDate = Date.now();

        await permission.save();
        return permission;
    } catch (error) {
        throw "Error deleting permission";
    }
};

export default DeletePermission;
