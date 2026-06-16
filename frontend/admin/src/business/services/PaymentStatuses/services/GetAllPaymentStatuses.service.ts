import connect from "../../connect";
import type { IPaginatedPaymentStatuses } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
const GetAllPaymentStatuses: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedPaymentStatuses> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedPaymentStatuses = await connect.get({ endpoint: `/payment-statuses?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedPaymentStatuses;
    return response;
};
export default GetAllPaymentStatuses;
