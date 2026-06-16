import type { IPaginatedCategories } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const GetAllCategories: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedCategories> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedCategories = await connect.get({ endpoint: `/categories?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedCategories;
    return response;
};
export default GetAllCategories;
