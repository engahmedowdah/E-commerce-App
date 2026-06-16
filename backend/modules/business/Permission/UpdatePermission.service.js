import PermissionModel from "../../data/Permission/Permission.model.js";
const UpdatePermission = async ({ PermissionID, Name, Description, IsActivated = false }) => {
    const permission = await PermissionModel.findOne({ _id: PermissionID, IsDeleted: false });
    if (!permission) throw new Error("Permission not found");
    const updatedPermission = await PermissionModel.findByIdAndUpdate(PermissionID, { Name, Description, IsActivated, UpdatedDate: Date.now() }, { new: true });
    if (!updatedPermission) throw new Error("Permission not updated");
    return updatedPermission;
};
export default UpdatePermission;
