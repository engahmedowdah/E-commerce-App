import ReviewModel from "../../data/Review/Review.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
const DeleteReview = async ({ ReviewID }) => {
    const review = await ReviewModel.findOne({ _id: ReviewID, IsDeleted: false });
    if (!review) throw new Error("Review not found");
    const deletedReview = await SoftDeleteById(ReviewModel, ReviewID);
    if (!deletedReview) throw new Error("Review not deleted");
    return deletedReview;
};
export default DeleteReview;
