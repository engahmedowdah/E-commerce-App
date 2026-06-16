import connect from "../../connect";
import type { IPaginatedCities } from "../../../../shared/types/Cities/ICity.types";
const GetAllCities: ({ CountryID, page, limit, sort }: { CountryID: string, page?: number, limit?: number, sort?: "newest" | "oldest" | "name_asc" | "name_desc" }) => Promise<IPaginatedCities> = async ({ CountryID, page = 1, limit = 10, sort = "newest" }) => {
  const response: IPaginatedCities = (await connect.get({
    endpoint: `/cities?page=${page}&limit=${limit}&sort=${sort}`,
    body: { CountryID: CountryID },
  })) as IPaginatedCities;
  return response;
};
export default GetAllCities;
