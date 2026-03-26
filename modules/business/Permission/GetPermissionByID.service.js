import PermissionModel from "../../data/Permission/Permission.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetPermissionByID = async ({ PermissionID, includeDeleted = false }) => {
    try {
        if (!PermissionID) throw new Error("Missing required fields");
        const permission = await PermissionModel.findOne({ _id: PermissionID, ...NotDeletedFilter(includeDeleted) });
        if (!permission) throw new Error("Permission not found");

        return permission;
    } catch (error) {
        throw "Error getting permission";
    }
};
export default GetPermissionByID;
