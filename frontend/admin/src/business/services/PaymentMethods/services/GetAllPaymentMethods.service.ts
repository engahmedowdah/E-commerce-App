import connect from "../../connect";
import type { IPaginatedPaymentMethods } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
const GetAllPaymentMethods: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedPaymentMethods> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedPaymentMethods = await connect.get({ endpoint: `/payment-methods?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedPaymentMethods;
    return response;
};
export default GetAllPaymentMethods;
