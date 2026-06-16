import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
const UpdateCountry: ({ CountryID, country }: { CountryID: string, country: ICountry }) => Promise<ICountry | null> = async ({ CountryID, country }: { CountryID: string, country: ICountry }) => {
    if (!validateRequired(CountryID) || !validateRequired(country.Name) || !validateRequired(country.CurrencySymbol) || !validateRequired(country.Slug)) {
        return null;
    }
    const response: ICountry = await connect.put({ endpoint: `/country`, body: { CountryID: CountryID, ...country } }) as ICountry;
    return response;
};
export default UpdateCountry;
