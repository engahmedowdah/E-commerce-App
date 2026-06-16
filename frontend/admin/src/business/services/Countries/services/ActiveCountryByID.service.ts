import { validateRequired } from "../../../validators";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import connect from "../../connect";
const ActiveCountryByID: ({ CountryID }: { CountryID: string }) => Promise<ICountry | null> = async ({ CountryID }: { CountryID: string }) => {
    if (!validateRequired(CountryID)) {
        return null;
    }
    const response: ICountry = await connect.patch({ endpoint: `/country/active`, body: { CountryID: CountryID } }) as ICountry;
    return response;
};
export default ActiveCountryByID;
