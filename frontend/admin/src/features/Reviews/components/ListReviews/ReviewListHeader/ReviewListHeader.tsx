import useTranslation from "../../../../../shared/i18n/useTranslation";

const ReviewListHeader = () => {
  const t = useTranslation();
  return (
    <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between">
      <h3 className="text-lg font-bold text-primary">{t.list.allReviews}</h3>
      <div className="flex gap-2">
        <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant" title="Filter"><span className="material-symbols-outlined">filter_list</span></button>
        <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant" title="Export"><span className="material-symbols-outlined">download</span></button>
      </div>
    </div>
  );
};
export default ReviewListHeader;
