import RoleModel from "../../data/Role/Role.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
const DeleteRole = async ({ RoleID }) => {
    const role = await RoleModel.findOne({ _id: RoleID, IsDeleted: false });
    if (!role) throw new Error("Role not found");
    const deletedRole = await SoftDeleteById(RoleModel, RoleID);
    if (!deletedRole) throw new Error("Role not deleted");
    return deletedRole;
};
export default DeleteRole;
