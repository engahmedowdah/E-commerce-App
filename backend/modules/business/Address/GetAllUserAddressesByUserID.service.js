import AddressModel from "../../data/Address/Address.model.js";
import AddressMapper from "./AddressMapper.js";
const GetAllUserAddressesByUserID = async ({ UserID, page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreateDate: -1 };
  if (sort === "oldest") sortQuery = { CreateDate: 1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
  const [addresses, totalItems, defaultAddresses] = await Promise.all([
    AddressModel.find(
    {
      UserID: UserID,
      IsDeleted: false
    },
    {},
    {
      skip: (page - 1) * limit,
      limit: limit,
    }
    )
    .populate("UserID")
    .populate("CityID")
    .populate("CountryID")
    .sort(sortQuery)
    .lean()
    .skip(skip)
    .limit(limit),
    AddressModel.countDocuments({ UserID: UserID, IsDeleted: false }),
    AddressModel.countDocuments({ UserID: UserID, IsDeleted: false, IsDefault: true }),
  ]);
  const mappedData = await Promise.all(addresses.map(AddressMapper));
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit,
      stats: {
        defaultAddresses,
      },
    },
  };
};
export default GetAllUserAddressesByUserID;
