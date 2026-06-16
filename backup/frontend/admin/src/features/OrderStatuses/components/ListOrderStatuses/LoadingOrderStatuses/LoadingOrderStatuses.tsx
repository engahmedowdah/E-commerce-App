function LoadingOrderStatuses() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-on-surface-variant font-medium">Loading orderstatuses...</p>
      </div>
    </div>
  );
}
export default LoadingOrderStatuses;
