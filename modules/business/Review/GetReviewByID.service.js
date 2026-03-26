import { NotDeletedFilter } from "../../../shared/utils.js";
import ReviewModel from "../../data/Review/Review.model.js";
const GetReviewByID = async ({ ReviewID, IncludeDeleted = false }) => {
  try {
    if (!ReviewID) throw new Error("Missing required fields");
    const review = await ReviewModel.findOne(
      {
        _id: ReviewID,
        ...NotDeletedFilter(IncludeDeleted)
      }).populate("ProductID").populate("UserID");

    if (!review) throw new Error("Review not found");

    return review;
  } catch (error) {
    throw "Error getting review";
  }
};
export default GetReviewByID;
