import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
const GetRoleByID: ({ RoleID }: { RoleID: string }) => Promise<IRole | null> = async ({ RoleID }: { RoleID: string }) => {
    if (!validateRequired(RoleID)) {
        return null;
    }
    const response: IRole = await connect.get({ endpoint: `/role`, body: { RoleID: RoleID } }) as IRole;
    return response;
};
export default GetRoleByID;
