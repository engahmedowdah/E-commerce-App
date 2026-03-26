import ProductModel from "../../data/Product/Product.model.js";

const SearchWithFilters = async ({
    Name,
    CategoryIDs,
    CollectionIDs,
    SubCategoryIDs,
    MinPrice,
    MaxPrice,
    PageSize = 20,
    PageNumber = 1,
    IncludeDeleted = false
}) => {
    try {
        const query = {
            IsActive: true
        };

        if (Name) {
            query.Name = { $regex: Name, $options: "i" };
        }

        if (CategoryIDs && CategoryIDs.length > 0) {
            query.CategoryID = { $in: CategoryIDs };
        }

        if (CollectionIDs && CollectionIDs.length > 0) {
            query.CollectionID = { $in: CollectionIDs };
        }

        if (SubCategoryIDs && SubCategoryIDs.length > 0) {
            query.SubCategoryID = { $in: SubCategoryIDs };
        }

        if (MinPrice || MaxPrice) {
            query.Price = {};

            if (MinPrice) query.Price.$gte = MinPrice;

            if (MaxPrice) query.Price.$lte = MaxPrice;
        }

        query = {
            ...query,
            ...NotDeletedFilter(IncludeDeleted)
        }

        const products = await ProductModel
            .find(query)
            .skip((PageNumber - 1) * PageSize)
            .limit(PageSize)
            .populate("CategoryID")
            .populate("CollectionID");

        const count = await ProductModel.countDocuments(query);

        if (!products) throw new Error("Products not found");

        return { products, count };
    } catch (error) {
        throw "Error searching products";
    }
};

export default SearchWithFilters;