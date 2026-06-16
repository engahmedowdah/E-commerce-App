import connect from "../../connect";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
const DeleteRole: ({ RoleID }: { RoleID: string }) => Promise<IRole> = async ({ RoleID }: { RoleID: string }) => {
    const response: IRole = await connect.del({ endpoint: `/role`, body: { RoleID } }) as IRole;
    return response;
};
export default DeleteRole;
