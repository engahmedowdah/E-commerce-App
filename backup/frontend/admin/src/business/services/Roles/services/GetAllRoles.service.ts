import connect from "../../connect";
import type { IPaginatedRoles } from "../../../../shared/types/Roles/IRole.types";
const GetAllRoles: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedRoles> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedRoles = await connect.get({ endpoint: `/roles?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedRoles;
    return response;
};
export default GetAllRoles;
