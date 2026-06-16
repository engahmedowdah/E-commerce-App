import connect from "../../connect";
import type { IPaginatedCollections } from "../../../../shared/types/Collections/ICollection.types";
const GetAllCollections: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedCollections> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedCollections = (await connect.get({ endpoint: `/collections?page=${page}&limit=${limit}&sort=${sort}` })) as IPaginatedCollections;
    return response;
};
export default GetAllCollections;
