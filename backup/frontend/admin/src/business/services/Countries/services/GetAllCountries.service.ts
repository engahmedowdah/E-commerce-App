import connect from "../../connect";
import type { IPaginatedCountries } from "../../../../shared/types/Countries/ICountry.types";
const GetAllCountries: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedCountries> = async ({ page = 1, limit = 10, sort = "newest" }) => {
    const response: IPaginatedCountries = (await connect.get({ endpoint: `/countries?page=${page}&limit=${limit}&sort=${sort}` })) as IPaginatedCountries;
    return response;
};
export default GetAllCountries;
