import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import connect from "../../connect";
const DeleteCountry: ({ CountryID }: { CountryID: string }) => Promise<ICountry> = async ({ CountryID }: { CountryID: string }) => {
    const response: ICountry = await connect.del({ endpoint: `/country`, body: { CountryID: CountryID } }) as ICountry;
    return response;
};
export default DeleteCountry;
