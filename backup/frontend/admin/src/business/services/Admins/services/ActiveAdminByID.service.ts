import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import connect from "../../connect";
const ActiveAdminByID: ({ AdminID }: { AdminID: string }) => Promise<IAdmin> = async ({ AdminID }: { AdminID: string }) => {
    const response: IAdmin = await connect.patch({ endpoint: "/admin/active", body: () => ({ AdminID: AdminID }) }) as IAdmin;
    return response;
};
export default ActiveAdminByID;
