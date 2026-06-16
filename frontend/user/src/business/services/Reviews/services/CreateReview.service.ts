import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { IReview } from "../../../../shared/types/Reviews/IReview.types";
const CreateReview: ({ UserID, ProductID, Rating, Comment }: { UserID: string, ProductID: string, Rating: number, Comment: string }) => Promise<IReview | null> = async ({ UserID, ProductID, Rating, Comment }: { UserID: string, ProductID: string, Rating: number, Comment: string }) => {
    if (!validateRequired(UserID) || !validateRequired(ProductID)) {
        return null;
    }
    const response: IReview = await connect.post({ endpoint: `/review`, body: { UserID: UserID, ProductID: ProductID, Rating: Rating, Comment: Comment } }) as IReview;
    return response;
};
export default CreateReview;
