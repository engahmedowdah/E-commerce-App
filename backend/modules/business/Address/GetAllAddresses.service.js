import AddressModel from "../../data/Address/Address.model.js";
import AddressMapper from "./AddressMapper.js";
const GetAllAddresses = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreateDate: -1 };
  if (sort === "oldest") sortQuery = { CreateDate: 1 };
  const [addresses, totalItems, defaultAddresses] = await Promise.all([
    AddressModel.find({ IsDeleted: false })
      .populate("UserID")
      .populate("CityID")
      .populate("CountryID")
      .lean().skip(skip).limit(limit),
    AddressModel.countDocuments({ IsDeleted: false }),
    AddressModel.countDocuments({ IsDeleted: false, IsDefault: true }),
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
        totalItems,
        defaultAddresses,
      },
    },
  };
};
export default GetAllAddresses;
