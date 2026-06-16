import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICity } from "../../../../shared/types/Cities/ICity.types";
const DeleteCity: ({ CityID }: { CityID: string }) => Promise<ICity | null> = async ({ CityID }: { CityID: string }) => {
    if (!validateRequired(CityID)) {
        return null;
    }
    const response: ICity = await connect.del({ endpoint: `/city`, body: { CityID: CityID } }) as ICity;
    return response;
};
export default DeleteCity;
