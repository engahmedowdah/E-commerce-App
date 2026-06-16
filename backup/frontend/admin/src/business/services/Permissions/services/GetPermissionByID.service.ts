import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const GetPermissionByID: ({ PermissionID }: { PermissionID: string }) => Promise<IPermission> = async ({ PermissionID }: { PermissionID: string }) => {
    const response: IPermission = await connect.get({ endpoint: `/permission`, body: { PermissionID: PermissionID } }) as IPermission;
    return response;
};
export default GetPermissionByID;
