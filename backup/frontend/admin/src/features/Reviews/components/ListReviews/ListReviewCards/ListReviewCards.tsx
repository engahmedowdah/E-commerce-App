import type { IReview } from "../../../../../shared/types/Reviews/IReview.types";
import ReviewCard from "../ReviewCard/ReviewCard";
import LoadingReviews from "../LoadingReviews/LoadingReviews";
interface Props {
  reviews: IReview[];
  Loading: boolean;
  onRefresh?: () => void;
}
const ListReviewCards = ({ reviews, Loading, onRefresh }: Props) => {
  if (Loading) return <LoadingReviews />;
  if (reviews.length === 0) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-2xl border border-dashed border-surface-container-high">
        <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant">reviews</span>
        </div>
        <h4 className="text-xl font-black text-primary mb-2">No Reviews Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center max-w-sm">No customer reviews have been submitted yet.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {reviews.map((review, index) => (
        <ReviewCard key={review._id ?? index} review={review} onRefresh={onRefresh} />
      ))}
    </div>
  );
};
export default ListReviewCards;
