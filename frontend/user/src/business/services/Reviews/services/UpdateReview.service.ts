import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { IReview } from "../../../../shared/types/Reviews/IReview.types";
const UpdateReview: ({ ReviewID, Rating, Comment }: { ReviewID: string, Rating: number, Comment: string }) => Promise<IReview | null> = async ({ ReviewID, Rating, Comment }: { ReviewID: string, Rating: number, Comment: string }) => {
    if (!validateRequired(ReviewID)) {
        return null;
    }
    const response: IReview = await connect.put({ endpoint: `/review`, body: { ReviewID: ReviewID, Rating: Rating, Comment: Comment } }) as IReview;
    return response;
};
export default UpdateReview;
