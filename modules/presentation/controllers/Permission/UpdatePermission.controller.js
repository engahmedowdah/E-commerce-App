import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import UpdatePermissionService from "../../../business/Permission/UpdatePermission.service.js";

const UpdatePermission = async (req, res) => {
    try {
        const { PermissionID, AdminID, Name, Description, IsActivated } = req.body;

        const permission = await UpdatePermissionService(PermissionID, { Name, Description, IsActivated, UpdatedBy: AdminID });
        if (!permission) return NotFound(res, "Permission not found");
        return Ok(res, "Permission updated successfully", permission);
    } catch (error) {
        return ServerError(res, error.message);
    }
};
export default UpdatePermission;
