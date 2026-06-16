import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const GetPermissionByID: ({ PermissionID }: { PermissionID: string }) => Promise<IPermission | null> = async ({ PermissionID }: { PermissionID: string }) => {
    if (!validateRequired(PermissionID)) {
        return null;
    }
    const response: IPermission = await connect.get({ endpoint: `/permission`, body: { PermissionID: PermissionID } }) as IPermission;
    return response;
};
export default GetPermissionByID;
