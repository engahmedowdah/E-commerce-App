import { validateRequired } from "../../../validators";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import connect from "../../connect";
const ActiveRoleByID: ({ RoleID }: { RoleID: string }) => Promise<IRole | null> = async ({ RoleID }: { RoleID: string }) => {
    if (!validateRequired(RoleID)) {
        return null;
    }
    const response: IRole = await connect.patch({ endpoint: `/role/active`, body: { RoleID } }) as IRole;
    return response;
};
export default ActiveRoleByID;
