import connect from "../../connect";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
const GetRoleByID: ({ RoleID }: { RoleID: string }) => Promise<IRole> = async ({ RoleID }: { RoleID: string }) => {
    const response: IRole = await connect.get({ endpoint: `/role`, body: { RoleID: RoleID } }) as IRole;
    return response;
};
export default GetRoleByID;
