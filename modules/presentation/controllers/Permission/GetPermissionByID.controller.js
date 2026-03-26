import { Ok, NotFound, ServerError } from "../../../../shared/utils.js";
import GetPermissionByIDService from "../../../business/Permission/GetPermissionByID.service.js";

const GetPermissionByID = async (req, res) => {
    try {
        const { PermissionID } = req.body;
        const permission = await GetPermissionByIDService(PermissionID);
        if (!permission) return NotFound(res, "Permission not found");
        return Ok(res, "Permission fetched successfully", permission);
    } catch (error) {
        return ServerError(res, error.message);
    }
};
export default GetPermissionByID;
