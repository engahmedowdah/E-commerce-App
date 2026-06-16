import connect from "../../connect";
import type { IPaginatedPermissions } from "../../../../shared/types/Permissions/IPermission.types";
const GetAllPermissions: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedPermissions> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedPermissions = await connect.get({ endpoint: `/permissions?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedPermissions;
    return response;
};
export default GetAllPermissions;
