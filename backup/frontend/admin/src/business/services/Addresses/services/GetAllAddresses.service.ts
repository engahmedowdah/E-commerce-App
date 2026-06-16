import connect from "../../connect";
import type { IPaginatedAddresses } from "../../../../shared/types/Addresses/IAddress.types";
const GetAllAddresses: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedAddresses> = async ({ page, limit, sort }) => {
    const response: IPaginatedAddresses = await connect.get({ endpoint: `/addresses?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedAddresses;
    return response;
};
export default GetAllAddresses;
