import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreatePermissionService from "../../../business/Permission/CreatePermission.service.js";
const createSchema = {
    Name: { type: "string", required: true },
    Description: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
};
export default async function CreatePermissionController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { Name, Description, IsActivated } = req.body;
    try {
        const permission = await CreatePermissionService({ Name, Description, IsActivated });
        if (!permission) {
            return BadRequest(res, "Failed to create permission");
        }
        return Created(res, "Permission created successfully", permission);
    } catch (error) {
        return ServerError(res, error.message);
    }
};
