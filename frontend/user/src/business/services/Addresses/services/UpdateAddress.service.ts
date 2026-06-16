import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { IAddress } from "../../../../shared/types/Addresses/IAddress.types";
const UpdateAddress: ({ AddressID }: { AddressID: string }) => Promise<IAddress | null> = async ({ AddressID }: { AddressID: string }) => {
    if (!validateRequired(AddressID)) {
        return null;
    }
    const response: IAddress = await connect.put({ endpoint: "/address", body: { AddressID: AddressID } }) as IAddress;
    return response;
};
export default UpdateAddress;
