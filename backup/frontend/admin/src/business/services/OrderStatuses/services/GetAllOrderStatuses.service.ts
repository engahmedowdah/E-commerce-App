import connect from "../../connect";
import type { IPaginatedOrderStatuses } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
const GetAllOrderStatuses: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedOrderStatuses> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedOrderStatuses = await connect.get({ endpoint: `/order-statuses?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedOrderStatuses;
    return response;
};
export default GetAllOrderStatuses;
