import PermissionModel from "../../data/Permission/Permission.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAllPermissions = async ({ includeDeleted = false }) => {
    try {
        const permissions = await PermissionModel.find(NotDeletedFilter(includeDeleted));

        if (!permissions) throw new Error("Permissions not found");

        return permissions;
    } catch (error) {
        throw "Error getting permissions";
    }
};
export default GetAllPermissions;
