import connect from "../../connect";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
const CreateCountry: ({ country }: { country: ICountry }) => Promise<ICountry> = async ({ country }: { country: ICountry }) => {
    const response: ICountry = await connect.post({ endpoint: `/country`, body: { ...country } }) as ICountry;
    return response;
};
export default CreateCountry;
