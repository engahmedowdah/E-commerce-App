import connect from "../../connect";
import type { IPaginatedProducts } from "../../../../shared/types/Products/IProduct.types";
const GetAllProducts: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" | "price_asc" | "price_desc" }) => Promise<IPaginatedProducts> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedProducts = (await connect.get({ endpoint: `/products?page=${page}&limit=${limit}&sort=${sort}` })) as IPaginatedProducts;
    return response;
};
export default GetAllProducts;
