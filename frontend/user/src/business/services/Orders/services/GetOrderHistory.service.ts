import { validateRequired } from "../../../validators/validators";
import type { IPaginatedOrders } from "../../../../shared/types/Orders/IOrder.types";
import connect from "../../connect";
const GetOrdersHistory: ({ UserID, page, limit, sort }: { UserID: string, page?: number, limit?: number, sort?: "newest" | "oldest" | "total_amount_asc" | "total_amount_desc" | "name_asc" | "name_desc" }) => Promise<IPaginatedOrders | null> = async ({ UserID, page = 1, limit = 10, sort = "newest" }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const response: IPaginatedOrders = (await connect.get({ endpoint: `/orders/user?page=${page}&limit=${limit}&sort=${sort}`, body: { UserID: UserID } })) as IPaginatedOrders;
    return response;
};
export default GetOrdersHistory;
