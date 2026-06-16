import connect from "../../connect";
import type { IPaginatedAddresses } from "../../../../shared/types/Addresses/IAddress.types";
const GetAllUserAddressesByUserID: ({ UserID, page, limit, sort }: { UserID?: number, page?: number, limit?: number, sort?: "newest" | "oldest" }) => Promise<IPaginatedAddresses> = async ({ UserID, page, limit, sort }) => {
    const response: IPaginatedAddresses = await connect.get({ endpoint: `/addresses/user?page=${page}&limit=${limit}&sort=${sort}`, body: { UserID: UserID } }) as IPaginatedAddresses;
    return response;
};
export default GetAllUserAddressesByUserID;
