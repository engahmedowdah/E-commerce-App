import { Created, ServerError } from "../../../../shared/utils.js";
import CreatePermissionService from "../../../business/Permission/CreatePermission.service.js";

const CreatePermission = async (req, res) => {
    try {
        const { Name, Description, IsActivated, AdminID } = req.body;
        const permission = await CreatePermissionService({ Name, Description, IsActivated, CreatedBy: AdminID });
        return Created(res, "Permission created successfully", permission);
    } catch (error) {
        return ServerError(res, error.message);
    }
};
export default CreatePermission;
