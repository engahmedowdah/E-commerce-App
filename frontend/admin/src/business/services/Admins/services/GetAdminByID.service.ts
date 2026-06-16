import { validateRequired } from "../../../validators";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import connect from "../../connect";
const GetAdminByID: ({ AdminID }: { AdminID: string }) => Promise<IAdmin | null> = async ({ AdminID }: { AdminID: string }) => {

    if (!validateRequired(AdminID)) {
        return null;
    }
    const response: IAdmin = await connect.get({ endpoint: "/admin", body: { AdminID: AdminID } }) as IAdmin;
    return response;
};
export default GetAdminByID;
