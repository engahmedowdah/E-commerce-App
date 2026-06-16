import { Created, BadRequest, ServerError, ValidateSchema } from "../../../../shared/utils.js";
import CreateRole from "../../../business/Role/CreateRole.service.js";
const createSchema = {
    Name: { type: "string", required: true },
    Description: { type: "string", required: true },
    IsActivated: { type: "boolean", required: false },
    Permissions: { type: "array", required: true },
};
export default async function CreateRoleController(req, res) {
    const error = ValidateSchema(req.body, createSchema);
    if (error) return BadRequest(res, error);
    const { Name, Description, IsActivated, Permissions } = req.body;
    try {
        const result = await CreateRole({ Name, Description, IsActivated, Permissions });
        if (!result) {
            return BadRequest(res, "Failed to create role");
        }
        return Created(res, "Role created successfully", result);
    } catch (err) {
        return ServerError(res, err.message);
    }
}
