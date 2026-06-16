import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
const UpdateRole: ({ RoleID, role }: { RoleID: string, role: IRole }) => Promise<IRole | null> = async ({ RoleID, role }: { RoleID: string, role: IRole }) => {
    if (!validateRequired(RoleID)) {
        return null;
    }
    const response: IRole = await connect.put({ endpoint: `/role`, body: { RoleID: RoleID, ...role } }) as IRole;
    return response;
};
export default UpdateRole;
