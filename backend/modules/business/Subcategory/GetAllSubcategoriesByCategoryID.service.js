import SubcategoryModel from "../../data/Subcategory/Subcategory.model.js";
import SubcategoryMapper from "./SubcategoryMapper.js";
const GetAllSubcategoriesByCategoryID = async ({ CategoryID, page = 1, limit = 10, sort = "newest" }) => {
    const skip = (page - 1) * limit;
    let sortQuery = {};
    if (sort === "newest") sortQuery = { CreateDate: -1 };
    if (sort === "oldest") sortQuery = { CreateDate: 1 };
    if (sort === "a_z" || sort === "name_asc") sortQuery = { Name: 1 };
    if (sort === "z_a" || sort === "name_desc") sortQuery = { Name: -1 };
    const [subcategories, totalItems, activeItems, inactiveItems, totalProducts] = await Promise.all([
    SubcategoryModel.find({
        CategoryID: CategoryID,
        IsDeleted: false
    })
    .populate("CategoryID")
    .sort(sortQuery)
    .lean()
    .skip(skip)
    .limit(limit),
    SubcategoryModel.countDocuments({ CategoryID: CategoryID, IsDeleted: false }),
    SubcategoryModel.countDocuments({ CategoryID: CategoryID, IsDeleted: false, IsActivated: true }),
    SubcategoryModel.countDocuments({ CategoryID: CategoryID, IsDeleted: false, IsActivated: false }),
    ProductModel.countDocuments({ CategoryID: CategoryID, IsDeleted: false }),
    ]);
    if (!subcategories) throw new Error("Subcategories not found");
    const mappedData = await Promise.all(subcategories.map(SubcategoryMapper));
    return {
        data: mappedData,
        meta: {
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: page,
            limit,
            stats: {
                activeItems,
                inactiveItems,
                totalProducts,
            },
        },
    };
};
export default GetAllSubcategoriesByCategoryID;
