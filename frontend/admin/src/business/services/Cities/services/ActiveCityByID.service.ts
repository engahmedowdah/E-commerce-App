import { validateRequired } from "../../../validators";
import { ICity } from "../../../../shared/types/Cities/ICity.types";
import connect from "../../connect";
const ActiveCityByID: ({ CityID }: { CityID: string }) => Promise<ICity | null> = async ({ CityID }: { CityID: string }) => {
    if (!validateRequired(CityID)) {
        return null;
    }
    const response: ICity = await connect.patch({ endpoint: `/city/active`, body: { CityID: CityID } }) as ICity;
    return response;
};
export default ActiveCityByID;
