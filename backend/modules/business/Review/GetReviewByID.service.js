import mongoose from "mongoose";
import ReviewModel from "../../data/Review/Review.model.js";
import ReviewMapper from "./ReviewMapper.js";
const GetReviewByID = async ({ ReviewID }) => {
  if (!mongoose.Types.ObjectId.isValid(ReviewID)) {
    return null;
  }
  const review = await ReviewModel.findOne({
    _id: ReviewID,
    IsDeleted: false,
  })
  .populate("UserID")
  .populate("ProductID")
  .lean();
  return await ReviewMapper(review);
};
export default GetReviewByID;
