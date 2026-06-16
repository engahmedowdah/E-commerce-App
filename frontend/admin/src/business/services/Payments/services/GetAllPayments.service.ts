import connect from "../../connect";
import type { IPaginatedPayments } from "../../../../shared/types/Payments/IPayment.types";
const GetAllPayments: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" | "amount_desc" | "amount_asc" }) => Promise<IPaginatedPayments> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedPayments = (await connect.get({ endpoint: `/payments?page=${page}&limit=${limit}&sort=${sort}` })) as IPaginatedPayments;
    return response;
};
export default GetAllPayments;
