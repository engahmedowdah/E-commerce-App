import connect from "../../connect";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
const UpdateRole: ({ RoleID, role }: { RoleID: string, role: IRole }) => Promise<IRole> = async ({ RoleID, role }: { RoleID: string, role: IRole }) => {
    const response: IRole  = await connect.put({ endpoint: `/role`, body: { RoleID: RoleID, ...role } }) as IRole;
    return response;
};
export default UpdateRole;
