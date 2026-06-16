import connect from "../../connect";
import type { IPaginatedSubcategories } from "../../../../shared/types/Subcategories/ISubcategory.types";
const GetAllSubcategoriesByCategoryID: ({ CategoryID, page, limit, sort }: { CategoryID: string, page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedSubcategories> = async ({ CategoryID, page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedSubcategories = await connect.get({ endpoint: `/subcategories/category?page=${page}&limit=${limit}&sort=${sort}`, body: { CategoryID: CategoryID } }) as IPaginatedSubcategories;
    return response;
};
export default GetAllSubcategoriesByCategoryID;
