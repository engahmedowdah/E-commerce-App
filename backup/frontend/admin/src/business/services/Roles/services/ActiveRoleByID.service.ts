import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import connect from "../../connect";
const ActiveRoleByID: ({ RoleID }: { RoleID: string }) => Promise<IRole> = async ({ RoleID }: { RoleID: string }) => {
    const response: IRole = await connect.patch({ endpoint: `/role/active`, body: { RoleID } }) as IRole;
    return response;
};
export default ActiveRoleByID;
