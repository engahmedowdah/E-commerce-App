import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import DeletePermissionService from "../../../business/Permission/DeletePermission.service.js";

const DeletePermission = async (req, res) => {
    try {
        const { PermissionID, UserID } = req.body;
        const permission = await DeletePermissionService(PermissionID, UserID);
        if (!permission) return NotFound(res, "Permission not found");
        return Ok(res, "Permission deleted successfully", permission);
    } catch (error) {
        return ServerError(res, error.message);
    }
};
export default DeletePermission;
