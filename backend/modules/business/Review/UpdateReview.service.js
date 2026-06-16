import ReviewModel from "../../data/Review/Review.model.js";
const UpdateReview = async ({ ReviewID, ProductID, UserID, Rating, Comment }) => {
  const review = await ReviewModel.findOne({ _id: ReviewID, IsDeleted: false });
    if (!review) throw new Error("Review not found");
    const updatedReview = await ReviewModel.findOneAndUpdate({ _id: ReviewID, IsDeleted: false },
      {
        ProductID,
        UserID,
        Rating,
        Comment,
        UpdatedDate: Date.now()
      },
      { new: true });
    return updatedReview;
};
export default UpdateReview;
