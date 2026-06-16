import mongoose from "mongoose";
import RoleModel from "../../data/Role/Role.model.js";
import RoleMapper from "./RoleMapper.js";
const GetRoleByID = async ({ RoleID }) => {
    if (!mongoose.Types.ObjectId.isValid(RoleID)) {
        return null;
    }
    const role = await RoleModel.findOne({
        _id: RoleID,
        IsDeleted: false
    })
    .populate("Permissions")
    .lean();
    return RoleMapper(role);
};
export default GetRoleByID;
