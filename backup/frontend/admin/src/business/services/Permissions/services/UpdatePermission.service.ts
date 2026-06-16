import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const UpdatePermission: ({ PermissionID, permission }: { PermissionID: string, permission: IPermission }) => Promise<IPermission> = async ({ PermissionID, permission }: { PermissionID: string, permission: IPermission }) => {
    const response: IPermission  = await connect.put({ endpoint: `/permission`, body: { PermissionID: PermissionID, ...permission } }) as IPermission;
    return response;
};
export default UpdatePermission;
