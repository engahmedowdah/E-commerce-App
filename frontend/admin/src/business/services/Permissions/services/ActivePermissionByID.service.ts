import { validateRequired } from "../../../validators";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
import connect from "../../connect";
const ActivePermissionByID: ({ PermissionID }: { PermissionID: string }) => Promise<IPermission | null> = async ({ PermissionID }: { PermissionID: string }) => {
    if (!validateRequired(PermissionID)) {
        return null;
    }
    const response: IPermission = await connect.patch({ endpoint: `/permission/active`, body: { PermissionID: PermissionID } }) as IPermission;
    return response;
};
export default ActivePermissionByID;
