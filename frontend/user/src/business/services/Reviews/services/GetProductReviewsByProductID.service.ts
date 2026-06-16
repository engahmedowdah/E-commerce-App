import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { IPaginatedReviews } from "../../../../shared/types/Reviews/IReview.types";
const GetProductReviewsByProductID: ({ ProductID, page, limit, sort }: { ProductID: string, page?: number, limit?: number, sort?: "newest" | "oldest" | "rating_asc" | "rating_desc" | "name_asc" | "name_desc" }) => Promise<IPaginatedReviews | null> = async ({ ProductID, page = 1, limit = 10, sort = "newest" }) => {
    if (!validateRequired(ProductID)) {
        return null;
    }
    const response: IPaginatedReviews = await connect.get({ endpoint: `/reviews?page=${page}&limit=${limit}&sort=${sort}`, body: { ProductID: ProductID } }) as IPaginatedReviews;
    return response;
};
export default GetProductReviewsByProductID;
