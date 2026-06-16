import connect from "../../connect";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
const UpdateCountry: ({ CountryID, country }: { CountryID: string, country: ICountry }) => Promise<ICountry> = async ({ CountryID, country }: { CountryID: string, country: ICountry }) => {
    const response: ICountry = await connect.put({ endpoint: `/country`, body: { CountryID: CountryID, ...country } }) as ICountry;
    return response;
};
export default UpdateCountry;
