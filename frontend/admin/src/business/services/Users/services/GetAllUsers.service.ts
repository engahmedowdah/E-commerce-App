import type { IPaginatedUsers } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
const GetAllUsers: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedUsers> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedUsers = await connect.get({ endpoint: `/users?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedUsers;
    return response;
};
export default GetAllUsers;
