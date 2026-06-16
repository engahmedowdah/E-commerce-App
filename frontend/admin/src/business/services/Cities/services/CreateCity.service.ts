import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICity } from "../../../../shared/types/Cities/ICity.types";
const CreateCity: ({ city }: { city: ICity }) => Promise<ICity | null> = async ({ city }: { city: ICity }) => {
    if (!validateRequired(city.Name) || !validateRequired(city.CountryID)) {
        return null;
    }

    const response: ICity = await connect.post({ endpoint: `/city`, body: { ...city } }) as ICity;
    return response;
};
export default CreateCity;
