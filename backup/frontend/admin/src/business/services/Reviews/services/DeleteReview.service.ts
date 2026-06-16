import connect from "../../connect";
import type { IReview } from "../../../../shared/types/Reviews/IReview.types";
const DeleteReview: ({ ReviewID }: { ReviewID: string }) => Promise<IReview> = async ({ ReviewID }: { ReviewID: string }) => {
    const response: IReview = await connect.del({ endpoint: `/review`, body: { ReviewID: ReviewID } }) as IReview;
    return response;
};
export default DeleteReview;
