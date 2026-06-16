import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
import connect from "../../connect";
const ActivePermissionByID: ({ PermissionID }: { PermissionID: string }) => Promise<IPermission> = async ({ PermissionID }: { PermissionID: string }) => {
    const response: IPermission = await connect.patch({ endpoint: `/permission/active`, body: { PermissionID: PermissionID } }) as IPermission;
    return response;
};
export default ActivePermissionByID;
