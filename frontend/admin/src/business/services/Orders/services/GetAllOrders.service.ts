import type { IPaginatedOrders } from "../../../../shared/types/Orders/IOrder.types";
import connect from "../../connect";
const GetAllOrders: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "total_amount_asc" | "total_amount_desc" | "name_asc" | "name_desc" | "price_asc" | "price_desc" }) => Promise<IPaginatedOrders> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedOrders = (await connect.get({ endpoint: `/orders?page=${page}&limit=${limit}&sort=${sort}` })) as IPaginatedOrders
    return response;
};
export default GetAllOrders;
