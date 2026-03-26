import PermissionModel from "../../data/Permission/Permission.model.js";
const CreatePermission = async ({ Name, Description, IsActivated, CreatedBy }) => {
    try {
        if (!Name || !CreatedBy) throw new Error("Missing required fields");
        const permission = await PermissionModel.create(
            {
                Name,
                Description,
                IsActivated: IsActivated || false,
                CreatedBy,
                CreatedDate: Date.now(),
            });
        return permission;
    } catch (error) {
        throw "Error creating permission";
    }
};
export default CreatePermission;
