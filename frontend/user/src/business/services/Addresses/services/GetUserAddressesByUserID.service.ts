import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { IPaginatedAddresses } from "../../../../shared/types/Addresses/IAddress.types";
const GetUserAddressesByUserID: ({ UserID, page, limit, sort }: { UserID?: string, page?: number, limit?: number, sort?: "newest" | "oldest" }) => Promise<IPaginatedAddresses | null> = async ({ UserID, page, limit, sort }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const response: IPaginatedAddresses = await connect.get({ endpoint: `/addresses/user?page=${page}&limit=${limit}&sort=${sort}`, body: { UserID: UserID } }) as IPaginatedAddresses;
    return response;
};
export default GetUserAddressesByUserID;
