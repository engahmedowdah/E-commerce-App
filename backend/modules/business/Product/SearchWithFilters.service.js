import ProductModel from "../../data/Product/Product.model.js";
import ProductMapper from "./ProductMapper.js";
const SearchWithFilters = async ({
    Name,
    CategoryIDs,
    CollectionIDs,
    SubCategoryIDs,
    MinPrice,
    MaxPrice,
    IsActivated = true
}) => {
    let query = {
        IsActivated: IsActivated
    };
    if (Name) {
        query.Name = { $regex: Name, $options: "i" };
    }
    if (CategoryIDs && CategoryIDs.length > 0) {
        query.CategoryIDs = { $in: CategoryIDs };
    }
    if (CollectionIDs && CollectionIDs.length > 0) {
        query.CollectionIDs = { $in: CollectionIDs };
    }
    if (SubCategoryIDs && SubCategoryIDs.length > 0) {
        query.SubCategoryIDs = { $in: SubCategoryIDs };
    }
    if (MinPrice || MaxPrice) {
        query.Price = {};
        if (MinPrice) query.Price.$gte = MinPrice;
        if (MaxPrice) query.Price.$lte = MaxPrice;
    }
    query = {
        ...query,
        IsDeleted: false,
    }
    const products = await ProductModel
        .find(query)
        .lean();
    const count = await ProductModel.countDocuments(query);
    if (!products) throw new Error("Products not found");
    const mappedProducts = await Promise.all(products.map(ProductMapper));
    return { products: mappedProducts, count };
};
export default SearchWithFilters;
