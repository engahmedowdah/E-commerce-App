import type { IPaginatedAdmins } from "../../../../shared/types/Admins/IAdmin.types";
import connect from "../../connect";
const GetAllAdmins: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedAdmins> = async ({ page, limit, sort = "newest" }) => {
  const response: IPaginatedAdmins = (await connect.get({
    endpoint: `/admins?page=${page}&limit=${limit}&sort=${sort}`,
  })) as IPaginatedAdmins;
  return response;
};
export default GetAllAdmins;
