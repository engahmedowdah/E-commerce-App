import ReviewModel from "../../data/Review/Review.model.js";
const UpdateReview = async ({ ReviewID, ProductID, UserID, Rating, Comment, UpdatedBy }) => {
  try {
    if (!ReviewID || !ProductID || !UserID || !Rating || !Comment || !UpdatedBy) throw new Error("Missing required fields");
    const review = await ReviewModel.findById(ReviewID);

    if (!review) throw new Error("Review not found");

    review.ProductID = ProductID;
    review.UserID = UserID;
    review.Rating = Rating;
    review.Comment = Comment;
    review.UpdatedBy = UpdatedBy;
    review.UpdatedDate = Date.now();

    await review.save();

    return review;
  } catch (error) {
    throw "Error updating review";
  }
};
export default UpdateReview;
