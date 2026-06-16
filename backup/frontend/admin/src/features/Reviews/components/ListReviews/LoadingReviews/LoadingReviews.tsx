function LoadingReviews() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="text-on-surface-variant font-medium">Loading reviews...</p>
    </div>
  );
}
export default LoadingReviews;
