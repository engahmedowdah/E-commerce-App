import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const DeletePermission: ({ PermissionID }: { PermissionID: string }) => Promise<IPermission> = async ({ PermissionID }: { PermissionID: string }) => {
    const response: IPermission  = await connect.del({ endpoint: `/permission`, body: { PermissionID: PermissionID } }) as IPermission;
    return response;
};
export default DeletePermission;
