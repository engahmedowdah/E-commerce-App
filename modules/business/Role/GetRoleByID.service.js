import { NotDeletedFilter } from "../../../shared/utils.js";
import RoleModel from "../../data/Role/Role.model.js";
const GetRoleByID = async ({ RoleID, IncludeDeleted = false }) => {
    try {
        if (!RoleID) throw new Error("Missing required fields");
        const role = await RoleModel.findOne(
            {
                _id: RoleID,
                ...NotDeletedFilter(IncludeDeleted)
            });

        if (!role) throw new Error("Role not found");

        return role;
    } catch (error) {
        throw "Error getting role";
    }
};
export default GetRoleByID;
