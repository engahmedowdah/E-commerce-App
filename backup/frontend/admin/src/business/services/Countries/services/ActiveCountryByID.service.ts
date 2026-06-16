import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import connect from "../../connect";
const ActiveCountryByID: ({ CountryID }: { CountryID: string }) => Promise<ICountry> = async ({ CountryID }: { CountryID: string }) => {
    const response: ICountry = await connect.patch({ endpoint: `/country/active`, body: { CountryID: CountryID } }) as ICountry;
    return response;
};
export default ActiveCountryByID;
