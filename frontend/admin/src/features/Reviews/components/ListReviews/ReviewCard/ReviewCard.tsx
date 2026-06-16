import "./ReviewCard.css";
import { useState, useRef, useEffect } from "react";
import type { IReview } from "../../../../../shared/types/Reviews/IReview.types";
import { ConfirmModal, useToast } from "../../../../../shared/components";
import { DeleteReview } from "../../../../../business/services";
interface Props {
  review: IReview;
  onRefresh?: () => void;
}
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`material-symbols-outlined text-[16px] ${star <= rating ? "text-yellow-500" : "text-surface-container-high"}`}
          style={{ fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0" }}
        >star</span>
      ))}
      <span className="ml-1 text-xs font-bold text-on-surface-variant">{rating}/5</span>
    </div>
  );
}
const ReviewCard = ({ review, onRefresh }: Props) => {
  const { success, error } = useToast();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleDeleteClick = (e: React.MouseEvent) => { e.stopPropagation(); setShowDropdown(false); setIsDeleteModalOpen(true); };
  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteReview({ ReviewID: review._id as string });
      success("Review Deleted", "The review has been permanently deleted.");
      setIsDeleteModalOpen(false);
      if (onRefresh) onRefresh();
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete review");
    } finally { setIsDeleting(false); }
  };
  const userName = `${review.User?.FirstName ?? ""} ${review.User?.LastName ?? ""}`.trim() || "Anonymous";
  const initial = (review.User?.FirstName?.[0] ?? "A").toUpperCase();
  const productName = review.Product?.Name ?? "Unknown Product";
  const comment = review.Comment?.trim() || null;
  return (
    <>
      <div className="review-card bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
        <div className="p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <span className="text-primary font-black">{initial}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h5 className="font-bold text-on-surface truncate">{userName}</h5>
                <div className="relative" ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
                  <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-surface-container-low transition-colors text-on-surface-variant" type="button" onClick={(e) => { e.stopPropagation(); setShowDropdown(!showDropdown); }}>
                    <span className="material-symbols-outlined text-[16px]">more_vert</span>
                  </button>
                  {showDropdown && (
                    <ul className="absolute right-0 top-full mt-1 z-20 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-lg py-1 min-w-[160px]">
                      <li><button className="w-full text-left px-4 py-2 text-sm font-medium text-error hover:bg-error/10 transition-colors flex items-center gap-2" onClick={handleDeleteClick}><span className="material-symbols-outlined text-[16px]">delete</span>Delete</button></li>
                    </ul>
                  )}
                </div>
              </div>
              <StarRating rating={review.Rating} />
            </div>
          </div>
          <div className="flex items-center gap-1.5 mb-3">
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant">inventory_2</span>
            <span className="text-xs font-medium text-on-surface-variant truncate">{productName}</span>
          </div>
          {comment ? (
            <p className="text-sm text-on-surface leading-relaxed line-clamp-3 mb-2">{comment}</p>
          ) : (
            <p className="text-sm italic text-on-surface-variant/60">No comment provided.</p>
          )}
        </div>
        <div className="px-5 py-2.5 bg-surface-container-low/40 border-t border-outline-variant/20 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${review.IsActivated ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${review.IsActivated ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></span>
            {review.IsActivated ? "Active" : "Inactive"}
          </span>
          <span className="text-xs text-on-surface-variant/60">{review.CreatedDate ? new Date(review.CreatedDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "—"}</span>
        </div>
      </div>
      <ConfirmModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={confirmDelete} title="Delete Review" message={`Are you sure you want to permanently delete this review by "${userName}"?`} confirmText={isDeleting ? "Deleting..." : "Delete"} cancelText="Cancel" type="danger" />
    </>
  );
};
export default ReviewCard;
