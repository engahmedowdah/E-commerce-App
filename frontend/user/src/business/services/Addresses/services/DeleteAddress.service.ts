import { validateRequired } from "../../../validators/validators";
import type { IAddress } from "../../../../shared/types/Addresses/IAddress.types";
import connect from "../../connect";
const DeleteAddress: ({ AddressID }: { AddressID: string }) => Promise<IAddress | null> = async ({ AddressID }: { AddressID: string }) => {
    if (!validateRequired(AddressID)) {
        return null;
    }
    const response: IAddress = await connect.del({ endpoint: "/address", body: { AddressID: AddressID } }) as IAddress;
    return response;
};
export default DeleteAddress;
