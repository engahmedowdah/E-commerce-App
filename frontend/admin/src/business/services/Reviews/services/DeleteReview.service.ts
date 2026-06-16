import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IReview } from "../../../../shared/types/Reviews/IReview.types";
const DeleteReview: ({ ReviewID }: { ReviewID: string }) => Promise<IReview | null> = async ({ ReviewID }: { ReviewID: string }) => {
    if (!validateRequired(ReviewID)) {
        return null;
    }
    const response: IReview = await connect.del({ endpoint: `/review`, body: { ReviewID: ReviewID } }) as IReview;
    return response;
};
export default DeleteReview;
