import connect from "../../connect";
import { validateRequired } from "../../../validators";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
const CreateAdmin: ({ admin }: { admin: IAdmin }) => Promise<IAdmin | null> = async ({ admin }: { admin: IAdmin }) => {
    if (!validateRequired(admin.UserName) || !validateRequired(admin.FirstName) || !validateRequired(admin.LastName) || !validateRequired(admin.Email) || !validateRequired(admin.Password) || !validateRequired(admin.RoleID)) {
        return null;
    }
    const response: IAdmin = await connect.post({ endpoint: "/admin", body: { ...admin } }) as IAdmin;
    return response;
};
export default CreateAdmin;
