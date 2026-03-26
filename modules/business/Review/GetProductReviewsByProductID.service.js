import { NotDeletedFilter } from "../../../shared/utils.js";
import ReviewModel from "../../data/Review/Review.model.js";

const GetProductReviewsByProductID = async (ProductID, { includeDeleted = false }) => {
  try {
    if (!ProductID) throw new Error("ProductID is required");
    const reviews = await ReviewModel.find({
      ProductID,
      ...NotDeletedFilter(includeDeleted),
    });

    await Promise.all([
      reviews.populate("ProductID"),
      reviews.populate("UserID")
    ]);

    return reviews;
  } catch (error) {
    throw "Error getting product reviews";
  }
};

export default GetProductReviewsByProductID;
