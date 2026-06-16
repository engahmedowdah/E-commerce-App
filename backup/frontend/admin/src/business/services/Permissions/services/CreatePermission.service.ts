import connect from "../../connect";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
const CreatePermission: ({ permission }: { permission: IPermission }) => Promise<IPermission> = async ({ permission }: { permission: IPermission }) => {
    const response: IPermission  = await connect.post({ endpoint: `/permission`, body: { ...permission } }) as IPermission;
    return response;
};
export default CreatePermission;
