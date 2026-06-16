import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const GetAllPermissionsByRoleID: ({ RoleID, page, limit }: { RoleID: string, page?: number, limit?: number }) => Promise<IPermission[]> = async ({ RoleID, page = 1, limit = 10 }) => {
    const response: IPermission[] = await connect.get({ endpoint: `/permissions/role?page=${page}&limit=${limit}`, body: { RoleID: RoleID } }) as IPermission[];
    return response;
};
export default GetAllPermissionsByRoleID;
