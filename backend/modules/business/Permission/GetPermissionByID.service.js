import mongoose from "mongoose";
import PermissionModel from "../../data/Permission/Permission.model.js";
import PermissionMapper from "./PermissionMapper.js";
const GetPermissionByID = async ({ PermissionID }) => {
    if (!mongoose.Types.ObjectId.isValid(PermissionID)) {
        return null;
    }
    const permission = await PermissionModel.findOne({
        _id: PermissionID,
        IsDeleted: false,
    }).lean();
    return PermissionMapper(permission);
};
export default GetPermissionByID;
