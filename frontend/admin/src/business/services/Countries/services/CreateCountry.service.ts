import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
const CreateCountry: ({ country }: { country: ICountry }) => Promise<ICountry | null> = async ({ country }: { country: ICountry }) => {
    if (!validateRequired(country.Name) || !validateRequired(country.CurrencySymbol) || !validateRequired(country.Slug)) {
        return null;
    }
    const response: ICountry = await connect.post({ endpoint: `/country`, body: { ...country } }) as ICountry;
    return response;
};
export default CreateCountry;
