import CityModel from "../../data/City/City.model.js";
import CityMapper from "./CityMapper.js";
const GetAllCities = async ({ CountryID, page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreationDate: -1 };
  if (sort === "oldest") sortQuery = { CreationDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [cities, totalItems] = await Promise.all([
    CityModel.find({
      CountryID: CountryID,
      IsDeleted: false,
    })
    .populate("CountryID")
    .sort(sortQuery)
    .lean()
    .skip(skip)
    .limit(limit),
    CityModel.countDocuments({ CountryID: CountryID, IsDeleted: false })
  ]);
  if (!cities) throw new Error("Cities not found");
  const mappedData = await Promise.all(cities.map(CityMapper));
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit
    }
  };
};
export default GetAllCities;
