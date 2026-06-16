import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { IAddress } from "../../../../shared/types/Addresses/IAddress.types";
const CreateAddress: ({ Address }: { Address: IAddress }) => Promise<IAddress | null> = async ({ Address }: { Address: IAddress }) => {
    if (!validateRequired(Address.UserID) || !validateRequired(Address.CityID) || !validateRequired(Address.CountryID) || !validateRequired(Address.AddressLine1)) {
        return null;
    }
    const response: IAddress | null = await connect.post({ endpoint: "/address", body: { Address: Address } }) as IAddress | null;
    return response;
};
export default CreateAddress;
