import PermissionModel from "../../data/Permission/Permission.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
const DeletePermission = async ({ PermissionID }) => {
    const permission = await PermissionModel.findOne({ _id: PermissionID, IsDeleted: false });
    if (!permission) throw new Error("Permission not found");
    const deletedPermission = await SoftDeleteById(PermissionModel, PermissionID);
    if (!deletedPermission) throw new Error("Permission not deleted");
    return deletedPermission;
};
export default DeletePermission;
