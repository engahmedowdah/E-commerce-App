import type { IPaginatedCarts } from "../../../../shared/types/Carts/ICart.types";
import connect from "../../connect";
const GetCartByUserID: ({ UserID, page, limit, sort }: { UserID: string, page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" | "price_asc" | "price_desc" }) => Promise<IPaginatedCarts> = async ({ UserID, page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedCarts = await connect.get({ endpoint: `/cart?page=${page}&limit=${limit}&sort=${sort}`, body: { UserID: UserID } }) as IPaginatedCarts;
    return response;
};
export default GetCartByUserID;
