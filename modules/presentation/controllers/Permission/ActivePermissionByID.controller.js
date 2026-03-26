import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import ActivePermissionByIDService from "../../../business/Permission/ActivePermissionByID.service.js";

const ActivePermissionByID = async (req, res) => {
    try {
        const { PermissionID, AdminID } = req.body;
        const permission = await ActivePermissionByIDService(PermissionID, AdminID);
        if (!permission) return NotFound(res, "Permission not found");
        return Ok(res, "Permission activated successfully", permission);
    } catch (error) {
        return ServerError(res, error.message);
    }
};
export default ActivePermissionByID;
