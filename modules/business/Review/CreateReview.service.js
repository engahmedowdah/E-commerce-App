import ReviewModel from "../../data/Review/Review.model.js";

const CreateReview = async ({ ProductID, UserID, Rating, Comment, CreatedBy }) => {
  try {
    if (!ProductID || !UserID || Rating === undefined) {
      throw new Error("ProductID, UserID and Rating are required");
    }
    const review = await ReviewModel.create({
      ProductID,
      UserID,
      Rating,
      Comment,
      CreatedBy,
      CreatedDate: new Date(),
    });

    await review.populate([
      { path: "ProductID" },
      { path: "UserID" }
    ]);

    return review;
  } catch (error) {
    throw "Error creating review";
  }
};

export default CreateReview;
