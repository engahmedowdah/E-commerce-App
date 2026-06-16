import { ICity } from "../../../../shared/types/Cities/ICity.types";
import connect from "../../connect";
const ActiveCityByID: ({ CityID }: { CityID: string }) => Promise<ICity> = async ({ CityID }: { CityID: string }) => {
    const response: ICity = await connect.patch({ endpoint: `/city/active`, body: { CityID: CityID } }) as ICity;
    return response;
};
export default ActiveCityByID;
