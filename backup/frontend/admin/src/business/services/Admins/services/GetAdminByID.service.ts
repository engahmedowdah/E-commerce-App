import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import connect from "../../connect";
const GetAdminByID: ({ AdminID }: { AdminID: string }) => Promise<IAdmin> = async ({ AdminID }: { AdminID: string }) => {
    const response: IAdmin = await connect.get({ endpoint: "/admin", body: { AdminID: AdminID } }) as IAdmin;
    return response;
};
export default GetAdminByID;
