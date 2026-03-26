import ReviewModel from "../../data/Review/Review.model.js";
const DeleteReview = async ({ ReviewID, UpdatedBy }) => {
  try {
    if (!ReviewID) throw new Error("Review ID is required");
    const review = await ReviewModel.findByIdAndUpdate(
      ReviewID,
      {
        IsDeleted: true,
        UpdatedBy,
        UpdatedDate: new Date(),
      },
      { new: true }
    );

    if (!review) {
      throw new Error("Review not found");
    }

    await review.populate([
      { path: "ProductID" },
      { path: "UserID" }
    ]);

    return review;
  } catch (error) {
    throw "Error deleting review";
  }
};

export default DeleteReview;
