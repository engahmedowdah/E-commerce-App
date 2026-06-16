import connect from "../../connect";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
const CreateRole: ({ role }: { role: IRole }) => Promise<IRole | null> = async ({ role }: { role: IRole }) => {
    const response: IRole  = await connect.post({ endpoint: `/role`, body: { ...role } }) as IRole;
    return response;
};
export default CreateRole;
