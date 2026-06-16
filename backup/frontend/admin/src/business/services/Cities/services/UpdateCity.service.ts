import connect from "../../connect";
import type { ICity } from "../../../../shared/types/Cities/ICity.types";
const UpdateCity: ({ CityID, city }: { CityID: string, city: ICity }) => Promise<ICity> = async ({ CityID, city }: { CityID: string, city: ICity }) => {
    const response: ICity = await connect.put({ endpoint: `/city`, body: { CityID: CityID, ...city } }) as ICity;
    return response;
};
export default UpdateCity;
