import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const UpdatePermission: ({ PermissionID, permission }: { PermissionID: string, permission: IPermission }) => Promise<IPermission | null> = async ({ PermissionID, permission }: { PermissionID: string, permission: IPermission }) => {
    if (!validateRequired(PermissionID)) {
        return null;
    }
    const response: IPermission = await connect.put({ endpoint: `/permission`, body: { PermissionID: PermissionID, ...permission } }) as IPermission;
    return response;
};
export default UpdatePermission;
