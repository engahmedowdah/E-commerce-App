import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
const GetCountryByID: ({ CountryID }: { CountryID: string }) => Promise<ICountry | null> = async ({ CountryID }: { CountryID: string }) => {
    if (!validateRequired(CountryID)) {
        return null;
    }
    const response: ICountry = await connect.get({ endpoint: `/country`, body: { CountryID: CountryID } }) as ICountry;
    return response;
};
export default GetCountryByID;
