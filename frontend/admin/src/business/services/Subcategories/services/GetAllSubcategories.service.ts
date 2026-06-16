import connect from "../../connect";
import type { IPaginatedSubcategories } from "../../../../shared/types/Subcategories/ISubcategory.types";
const GetAllSubcategories: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedSubcategories> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedSubcategories = await connect.get({ endpoint: `/subcategories?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedSubcategories;
    return response;
};
export default GetAllSubcategories;
