// Styles
import "./CollectionDetailsPage.css";

// React Library
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// Types
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";

// Services
import { GetCollectionByID, DeleteCollection } from "../../../../business/services";

// Shared Components
import { ConfirmModal, useToast } from "../../../../shared/components";

// ── Local: Loading ────────────────────────────────────────────────────────────
function LoadingCollections() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-on-surface-variant font-medium">Loading collections...</p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const CollectionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();

  const [collection, setCollection] = useState<ICollection | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!id) return;
    GetCollectionByID({ CollectionID: id })
      .then((res: ICollection) => { setCollection(res); setLoading(false); })
      .catch((err: unknown) => { console.error("GetCollectionByID failed:", (err as Error).message || err); setLoading(false); });
  }, [id]);

  const handleDelete = async () => {
    if (!collection) return;
    setIsDeleting(true);
    try {
      await DeleteCollection({ CollectionID: collection._id as string });
      success("Collection Deleted", "The collection has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/collections");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete collection");
    } finally {
      setIsDeleting(false);
    }
  };

  // ── Loading state ──────────────────────────────────────────────────────────
  if (Loading) {
    return (
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
          <LoadingCollections />
        </div>
      </div>
    );
  }

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!collection) {
    return (
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl text-on-surface-variant">error</span>
          </div>
          <h4 className="text-lg font-bold text-primary mb-2">Collection Not Found</h4>
          <p className="text-sm font-medium text-on-surface-variant text-center">We couldn't find the collection details you're looking for.</p>
        </div>
      </div>
    );
  }

  const products = (collection.Products as IProduct[]) || [];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">

        {/* ── Header ────────────────────────────────────────────────────── */}
        <>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
            <Link to="/collections" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span className="font-medium">Collections</span>
            </Link>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            <span className="text-on-surface font-semibold">{collection.Name}</span>
          </div>

          {/* Title + Actions */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h1 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight leading-tight glow-text-sm">
                {collection.Name}
              </h1>
              <div className="flex flex-wrap gap-4">
                {/* Products metric */}
                <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">inventory_2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Products</p>
                    <p className="text-lg font-bold text-on-surface">{collection?.Products?.length || 0}</p>
                  </div>
                </div>
                {/* Created metric */}
                <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">calendar_today</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Created</p>
                    <p className="text-lg font-bold text-on-surface">
                      {collection?.CreatedDate ? new Date(collection.CreatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Unknown'}
                    </p>
                  </div>
                </div>
                {/* Status metric */}
                <div className="flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-outline-variant/30 shadow-sm hover-lift group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${collection.IsActivated ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>
                    <span className="material-symbols-outlined text-2xl">{collection.IsActivated ? 'check_circle' : 'cancel'}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-0.5 opacity-80">Status</p>
                    <p className={`text-lg font-bold ${collection.IsActivated ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {collection.IsActivated ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 mt-2 md:mt-0">
              <button onClick={() => setIsDeleteModalOpen(true)} className="flex items-center justify-center w-12 h-12 rounded-2xl bg-error/10 text-error hover:bg-error hover:text-on-error transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:bg-error/20 active:scale-95 focus:outline-none">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
              <Link to={`/collections/edit/${collection._id}`} className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]">
                <span className="material-symbols-outlined text-[20px]">edit</span>
                Edit Collection
              </Link>
            </div>
          </div>
        </>

        {/* ── Tabs ──────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-8 border-b border-outline-variant/30 mb-8 overflow-x-auto scrollbar-hide">
          {['Details', 'Products', 'Settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-full shadow-[0_-2px_10px_rgba(var(--color-primary),0.5)]"></span>
              )}
            </button>
          ))}
        </div>

        {/* ── Tab Content ───────────────────────────────────────────────── */}
        <div className="relative animate-fade-in">

          {/* Details Tab */}
          {activeTab === 'Details' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-8 flex flex-col">
                {/* Basic Info */}
                <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]">info</span>
                    </span>
                    Basic Information
                  </h3>
                  <div className="space-y-8">
                    <div className="group">
                      <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Name</p>
                      <p className="text-lg font-medium text-on-surface bg-surface-container-low/50 p-4 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low">{collection.Name}</p>
                    </div>
                    <div className="group">
                      <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-3">Description</p>
                      <p className="text-base text-on-surface leading-relaxed bg-surface-container-low/50 p-5 rounded-xl border border-outline-variant/20 transition-colors group-hover:bg-surface-container-low min-h-[120px]">
                        {collection.Description || <span className="italic text-on-surface-variant/70">No description provided.</span>}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Media */}
                <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow flex-1">
                  <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[18px]">imagesmode</span>
                    </span>
                    Media
                  </h3>
                  <div className="w-full h-64 bg-surface-container-low/30 rounded-2xl border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center text-on-surface-variant transition-all hover:bg-surface-container-low/50 hover:border-primary/50 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-5xl mb-4 opacity-40 group-hover:scale-110 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">image</span>
                    <p className="text-sm font-semibold tracking-wide">No image uploaded</p>
                    <p className="text-xs mt-2 opacity-60">Click to upload or drag and drop</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 flex flex-col">
                {/* SEO */}
                <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                    </span>
                    SEO Information
                  </h3>
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-outline-variant/20">
                      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Slug</p>
                      <p className="text-sm font-medium text-on-surface bg-surface-container-low/50 px-3 py-2 rounded-lg font-mono text-primary/90 select-all border border-outline-variant/20">/{collection.Slug}</p>
                    </div>
                    <div className="pb-4 border-b border-outline-variant/20">
                      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Title</p>
                      <p className="text-base font-medium text-on-surface">{collection.Name} - Collection</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Meta Description</p>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {collection.Description?.substring(0, 150) || 'No meta description set for this collection. Add a description to improve SEO.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm glass-panel hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-on-surface mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]">monitoring</span>
                    </span>
                    Status Insight
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
                      <span className="text-sm font-semibold text-on-surface-variant">Visibility</span>
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${collection.IsActivated ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}>
                        <span className={`w-2 h-2 rounded-full ${collection.IsActivated ? 'bg-green-500 dark:bg-green-400 animate-pulse' : 'bg-red-500 dark:bg-red-400'}`}></span>
                        {collection.IsActivated ? 'Public' : 'Hidden'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
                      <span className="text-sm font-semibold text-on-surface-variant">Published</span>
                      <span className="text-sm font-bold text-on-surface">
                        {collection.CreatedDate ? new Date(collection.CreatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Unknown'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/20">
                      <span className="text-sm font-semibold text-on-surface-variant">ID</span>
                      <span className="text-xs font-mono font-medium text-on-surface-variant bg-surface-container-high/50 px-2 py-1 rounded select-all">
                        {collection._id || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'Products' && (
            <div className={`bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-sm glass-panel flex flex-col w-full hover:shadow-md transition-shadow mb-12 ${products.length === 0 ? 'justify-center items-center min-h-[24rem]' : 'justify-start items-stretch min-h-[24rem]'}`}>
              {products.length === 0 ? (
                <>
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse-slow">
                    <span className="material-symbols-outlined text-4xl">inventory_2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Products Management</h3>
                  <p className="text-on-surface-variant mb-6 text-center max-w-md">Manage products assigned to this collection. You can add new products or remove existing ones.</p>
                  <button className="px-6 py-2.5 bg-surface-container-highest text-on-surface rounded-xl font-semibold hover:bg-surface-container-high transition-colors shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Assign Products
                  </button>
                </>
              ) : (
                <>
                  <div className="w-full flex justify-between items-center border-b border-outline-variant/30 pb-4 mb-8">
                    <h3 className="text-2xl font-bold text-on-surface flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                      </span>
                      Assigned Products
                    </h3>
                    <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                      Assign Products
                    </button>
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                    {products.map((product) => (
                      <div key={product._id} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                        <div className="w-full h-48 bg-surface-container relative overflow-hidden">
                          {product.Images && product.Images.length > 0 ? (
                            <img
                              src={`${import.meta.env.VITE_API_BASE_URL?.replace('/api/v1', '') || 'http://localhost:5000'}/${product.Images[0].Path}`}
                              alt={product.Name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/40 bg-surface-container-low">
                              <span className="material-symbols-outlined text-4xl mb-2 opacity-50">image_not_supported</span>
                              <span className="text-xs font-medium uppercase tracking-wider">No Image</span>
                            </div>
                          )}
                          <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${product.IsActivated ? 'bg-green-500/90 text-white' : 'bg-surface-container-highest/90 text-on-surface'}`}>
                              {product.IsActivated ? 'Active' : 'Draft'}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${product.Stock > 0 ? 'bg-primary/90 text-white' : 'bg-error/90 text-white'}`}>
                              {product.Stock > 0 ? `${product.Stock} in stock` : 'Out of stock'}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="mb-2">
                            <h4 className="text-lg font-bold text-on-surface mb-1 truncate group-hover:text-primary transition-colors">{product.Name}</h4>
                            <p className="text-sm text-on-surface-variant line-clamp-2 min-h-[2.5rem]">{product.Description || 'No description provided.'}</p>
                          </div>
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                            <span className="text-xl font-black text-on-surface">${product.Price.toFixed(2)}</span>
                            <div className="flex gap-2">
                              <Link to={`/products/edit/${product._id}`} className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" title="Edit Product">
                                <span className="material-symbols-outlined text-[16px]">edit</span>
                              </Link>
                              <Link to={`/products/details/${product._id}`} className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors" title="View Details">
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'Settings' && (
            <div className="bg-surface-container-lowest rounded-3xl p-12 border border-outline-variant/30 shadow-sm glass-panel flex flex-col justify-center items-center h-64 hover:shadow-md transition-shadow mb-12">
              <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary mb-6 hover:rotate-90 transition-transform duration-700">
                <span className="material-symbols-outlined text-4xl">settings</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">Collection Settings</h3>
              <p className="text-on-surface-variant text-center max-w-md">Configure advanced settings, URL handles, and metadata for this collection.</p>
            </div>
          )}
        </div>

        {/* Delete Confirm Modal */}
        <ConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
          title="Delete Collection"
          message={`Are you sure you want to delete the collection "${collection.Name}"? This action will move it to the trash.`}
          confirmText={isDeleting ? "Deleting..." : "Delete"}
          cancelText="Cancel"
          type="danger"
        />
      </div>
    </div>
  );
};

export default CollectionDetailsPage;
