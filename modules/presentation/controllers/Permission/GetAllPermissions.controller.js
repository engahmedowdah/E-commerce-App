import { Ok, ServerError } from "../../../../shared/utils.js";
import GetAllPermissionsService from "../../../business/Permission/GetAllPermissions.service.js";

const GetAllPermissions = async (req, res) => {
    try {
        const permissions = await GetAllPermissionsService();
        return Ok(res, "Permissions fetched successfully", permissions);
    } catch (error) {
        return ServerError(res, error.message);
    }
};
export default GetAllPermissions;
