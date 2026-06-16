import ReviewModel from "../../data/Review/Review.model.js";
const CreateReview = async ({ ProductID, UserID, Rating, Comment }) => {
  if (Rating < 1 || Rating > 5) throw new Error("Rating must be between 1 and 5");
  const review = await ReviewModel.create({
    ProductID: ProductID,
    UserID: UserID,
    Rating: Rating,
    Comment: Comment,
    CreatedDate: new Date(),
  });
  if (!review) throw new Error("Review not created");
  return review;
};
export default CreateReview;
