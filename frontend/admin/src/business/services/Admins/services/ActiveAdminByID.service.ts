import { validateRequired } from "../../../validators";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import connect from "../../connect";
const ActiveAdminByID: ({ AdminID }: { AdminID: Partial<string> }) => Promise<IAdmin | null> = async ({ AdminID }: { AdminID: Partial<string> }) => {

    if (!validateRequired(AdminID)) {
        return null;
    }
    const response: IAdmin = await connect.patch({ endpoint: "/admin/active", body: () => ({ AdminID: AdminID }) }) as IAdmin;
    return response;
};
export default ActiveAdminByID;
