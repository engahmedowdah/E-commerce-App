import CountryModel from "../../data/Country/Country.model.js";
import CityModel from "../../data/City/City.model.js";
import CountryMapper from "./CountryMapper.js";
const GetAllCountries = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const pageNumber = parseInt(page, 10) || 1;
  const limitNumber = parseInt(limit, 10) || 10;
  const skip = (pageNumber - 1) * limitNumber;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreateDate: -1 };
  if (sort === "oldest") sortQuery = { CreateDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [countries, totalItems, activeItems, inactiveItems, totalCities] = await Promise.all([
    CountryModel.find({ IsDeleted: false }).lean().skip(skip).limit(limitNumber).sort(sortQuery),
    CountryModel.countDocuments({ IsDeleted: false }),
    CountryModel.countDocuments({ IsDeleted: false, IsActivated: true }),
    CountryModel.countDocuments({ IsDeleted: false, IsActivated: false }),
    CityModel.countDocuments({ IsDeleted: false }),
  ]);
  if (!countries) throw new Error("Countries not found");
  const mappedData = await Promise.all(countries.map(CountryMapper));
  const avgCities = totalItems > 0 ? parseFloat((totalCities / totalItems).toFixed(2)) : 0;
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit,
      stats: {
        totalItems,
        activeItems,
        inactiveItems,
        totalCities,
        avgCities,
      },
    },
  };
};
export default GetAllCountries;
