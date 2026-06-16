import { useEffect, useState, useCallback } from "react";
import type { IReview } from "../../../../shared/types/Reviews/IReview.types";
import { GetAllReviews } from "../../../../business/services/";
import { ListReviewCards } from "../ListReviews";
interface Props {
  ProductID: string;
}
function StatChip({ icon, label, value, color }: { icon: string; label: string; value: string | number; color: string }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${color} bg-opacity-10`}>
      <span className="material-symbols-outlined text-xl">{icon}</span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{label}</p>
        <p className="text-lg font-black leading-none">{value}</p>
      </div>
    </div>
  );
}
const ProductReviewsTab = ({ ProductID }: Props) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchReviews = useCallback(() => {
    GetAllReviews({ limit: 1000, page: 1 })
      .then((res) => {
        const filtered = (res.data || []).filter((r) => r.ProductID === ProductID);
        setReviews(filtered);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [ProductID]);
  const handleRefresh = useCallback(() => {
    setLoading(true);
    fetchReviews();
  }, [fetchReviews]);
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);
  const total = reviews.length;
  const active = reviews.filter((r) => r.IsActivated).length;
  const avgRating = total > 0
    ? (reviews.reduce((acc, r) => acc + (r.Rating || 0), 0) / total).toFixed(1)
    : "—";
  return (
    <div className="space-y-6 mb-12">
      {!loading && (
        <div className="flex flex-wrap gap-3">
          <StatChip icon="reviews" label="Total" value={total} color="border-primary/30 text-primary" />
          <StatChip icon="check_circle" label="Active" value={active} color="border-green-500/30 text-green-600 dark:text-green-400" />
          <StatChip icon="star" label="Avg Rating" value={avgRating} color="border-yellow-500/30 text-yellow-600 dark:text-yellow-400" />
        </div>
      )}
      <div className="flex items-center justify-between bg-surface-container-lowest rounded-2xl px-5 py-4 border border-outline-variant/20 shadow-sm">
        <h3 className="text-base font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">rate_review</span>
          Customer Reviews
        </h3>
        <button
          onClick={handleRefresh}
          title="Refresh reviews"
          className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      </div>
      <ListReviewCards
        reviews={reviews}
        Loading={loading}
        onRefresh={handleRefresh}
      />
    </div>
  );
};
export default ProductReviewsTab;
