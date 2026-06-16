import connect from "../../connect";
import type { IPaginatedReviews } from "../../../../shared/types/Reviews/IReview.types";
const GetAllReviews: ({ page, limit, sort }: { page?: number, limit?: number, sort?: "newest" | "oldest" | "rating_asc" | "rating_desc" | "name_asc" | "name_desc" }) => Promise<IPaginatedReviews> = async ({ page = 1, limit = 10, sort = "newest" }) => {
  const response: IPaginatedReviews = await connect.get({ endpoint: `/reviews?page=${page}&limit=${limit}&sort=${sort}` }) as IPaginatedReviews;
  return response;
};
export default GetAllReviews;
