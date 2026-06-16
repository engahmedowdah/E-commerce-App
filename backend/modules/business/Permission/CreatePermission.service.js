import PermissionModel from "../../data/Permission/Permission.model.js";
const CreatePermission = async ({ Name, Description, IsActivated }) => {
    const exists = await PermissionModel.findOne({ Name, IsDeleted: false });
    if (exists) throw new Error("Permission already exists");
    const permission = await PermissionModel.create(
        {
            Name: Name,
            Description: Description,
            IsActivated: IsActivated || false,
            CreatedDate: Date.now(),
        });
    if (!permission) throw new Error("Permission not created");
    return permission;
};
export default CreatePermission;
