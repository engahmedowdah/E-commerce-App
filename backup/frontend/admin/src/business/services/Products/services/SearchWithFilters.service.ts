import connect from "../../connect";
import type { IPaginatedProducts } from "../../../../shared/types/Products/IProduct.types";
import type { ISearchWithFilters } from "../../../../shared/types/Products/ISearchWithFilters.types";
const SearchWithFilters: ({ filters, page, limit }: { filters?: ISearchWithFilters, page?: number, limit?: number }) => Promise<IPaginatedProducts> = async ({ filters, page = 1, limit = 10 }) => {
    const response: IPaginatedProducts = await connect.get({ endpoint: `/products/search?page=${page}&limit=${limit}`, body: { ...filters } }) as IPaginatedProducts;
    return response;
};
export default SearchWithFilters;
