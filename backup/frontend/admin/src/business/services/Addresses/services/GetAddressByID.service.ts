import connect from "../../connect";
import type { IAddress } from "../../../../shared/types/Addresses/IAddress.types";
const GetAddressByID: ({ AddressID }: { AddressID: string }) => Promise<IAddress> = async ({ AddressID }: { AddressID: string }) => {
    const response: IAddress = await connect.get({ endpoint: "/address", body: { AddressID: AddressID} }) as IAddress;
    return response;
};
export default GetAddressByID;
