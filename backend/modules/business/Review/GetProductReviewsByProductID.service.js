import ReviewModel from "../../data/Review/Review.model.js";
import ProductModel from "../../data/Product/Product.model.js";
import ReviewMapper from "./ReviewMapper.js";
const GetProductReviewsByProductID = async ({ ProductID, page = 1, limit = 10, sort = "newest" }) => {
  const skip = (page - 1) * limit;
  let sortQuery = {};
  if (sort === "newest") sortQuery = { CreatedDate: -1 };
  if (sort === "oldest") sortQuery = { CreatedDate: 1 };
  if (sort === "rating_asc") sortQuery = { Rating: 1 };
  if (sort === "rating_desc") sortQuery = { Rating: -1 };
  if (sort === "a_z" || sort === "name_asc") sortQuery = { "User.FirstName": 1, "User.LastName": 1 };
  if (sort === "z_a" || sort === "name_desc") sortQuery = { "User.FirstName": -1, "User.LastName": -1 };
  const product = await ProductModel.findOne({ _id: ProductID, IsDeleted: false });
  if (!product) throw new Error("Product not found");
  const [reviews, totalItems, helpfulReviews, notHelpfulReviews] = await Promise.all([
    ReviewModel.find({
      ProductID: ProductID,
      IsDeleted: false
    })
    .populate("UserID")
    .populate("ProductID")
    .sort(sortQuery)
    .lean()
    .skip(skip)
    .limit(limit),
    ReviewModel.countDocuments({ ProductID: ProductID, IsDeleted: false }),
    ReviewModel.countDocuments({ ProductID: ProductID, IsDeleted: false, Rating: { $gte: 2.5 } }),
    ReviewModel.countDocuments({ ProductID: ProductID, IsDeleted: false, Rating: { $lt: 2.5 } }),
  ]);
  const mappedData = await Promise.all(reviews.map(ReviewMapper));
  return {
    data: mappedData,
    meta: {
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      limit,
      stats: {
        helpfulReviews,
        notHelpfulReviews,
      },
    },
  };
};
export default GetProductReviewsByProductID;
