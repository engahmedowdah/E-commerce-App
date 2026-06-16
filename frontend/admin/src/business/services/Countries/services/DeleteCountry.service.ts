import { validateRequired } from "../../../validators";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import connect from "../../connect";
const DeleteCountry: ({ CountryID }: { CountryID: string }) => Promise<ICountry | null> = async ({ CountryID }: { CountryID: string }) => {
    if (!validateRequired(CountryID)) {
        return null;
    }
    const response: ICountry = await connect.del({ endpoint: `/country`, body: { CountryID: CountryID } }) as ICountry;
    return response;
};
export default DeleteCountry;
