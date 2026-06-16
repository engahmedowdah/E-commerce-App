import connect from "../../connect";
import type { IPaginatedCarts } from "../../../../shared/types/Carts/ICart.types";
const GetAllCarts: ({ page, limit, sort }:{ page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" | "price_asc" | "price_desc" }) => Promise<IPaginatedCarts> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedCarts = await connect.get({ endpoint: `/carts?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedCarts;
    return response;
};
export default GetAllCarts;
