import connect from "../../connect";
import type { ICity } from "../../../../shared/types/Cities/ICity.types";
const CreateCity: ({ city }: { city: ICity }) => Promise<ICity> = async ({ city }: { city: ICity }) => {
    const response: ICity = await connect.post({ endpoint: `/city`, body: { ...city } }) as ICity;
    return response;
};
export default CreateCity;
