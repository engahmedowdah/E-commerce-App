import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { ICity } from "../../../../shared/types/Cities/ICity.types";
const GetCityByID: ({ CityID }: { CityID: string }) => Promise<ICity | null> = async ({ CityID }: { CityID: string }) => {
    if (!validateRequired(CityID)) {
        return null;
    }
    const response: ICity = await connect.get({ endpoint: "/city", body: { CityID: CityID } }) as ICity;
    return response;
};
export default GetCityByID;
