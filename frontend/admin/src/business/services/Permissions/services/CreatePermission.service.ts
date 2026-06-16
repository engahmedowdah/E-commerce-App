import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const CreatePermission: ({ permission }: { permission: IPermission }) => Promise<IPermission | null> = async ({ permission }: { permission: IPermission }) => {
    if (!validateRequired(permission.Name)) {
        return null;
    }

    const response: IPermission = await connect.post({ endpoint: `/permission`, body: { ...permission } }) as IPermission;
    return response;
};
export default CreatePermission;
