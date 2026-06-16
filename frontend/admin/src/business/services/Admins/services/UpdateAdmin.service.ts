import connect from "../../connect";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import { validateRequired } from "../../../validators";
const UpdateAdmin: ({ AdminID, admin }: { AdminID: string, admin: IAdmin }) => Promise<IAdmin | null> = async ({ AdminID, admin }: { AdminID: string, admin: IAdmin }) => {
    if (!validateRequired(admin.FirstName) || !validateRequired(admin.LastName) || !validateRequired(admin.Email) || !validateRequired(admin.Phone) || !validateRequired(admin.RoleID)) {
        return null;
    }
    const response: IAdmin = await connect.put({ endpoint: "/admin", body: { AdminID: AdminID, ...admin } }) as IAdmin;
    return response;
};
export default UpdateAdmin;
