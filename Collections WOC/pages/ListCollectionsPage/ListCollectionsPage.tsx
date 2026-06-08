// React Library
import { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Types
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";

// Services
import { GetAllCollections, DeleteCollection } from "../../../../business/services";

// Shared Components
import { ConfirmModal, useToast } from "../../../../shared/components";

// Styles
import "./ListCollectionsPage.css";

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

// ── Local: Overview Card ──────────────────────────────────────────────────────
interface OverviewCardProps {
  label: string;
  value: string | number;
  icon: string;
  variant?: "primary" | "success" | "warning" | "info" | "error";
  loading?: boolean;
}
function DashboardOverviewCard({ label, value, icon, variant = "primary", loading }: OverviewCardProps) {
  if (loading) {
    return (
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-surface-container"></div>
          <div className="space-y-2">
            <div className="h-4 w-20 bg-surface-container rounded"></div>
            <div className="h-6 w-12 bg-surface-container rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  const variantClasses = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    info: "bg-info/10 text-info",
    error: "bg-error/10 text-error",
  };
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${variantClasses[variant]}`}>
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-on-surface-variant mb-0.5">{label}</p>
          <h3 className="text-2xl font-black text-on-surface leading-none">{value}</h3>
        </div>
      </div>
    </div>
  );
}

// ── Local: Collection Card ────────────────────────────────────────────────────
interface CollectionCardProps {
  collection: ICollection;
  onRefresh?: () => void;
}
function CollectionCard({ collection, onRefresh }: CollectionCardProps) {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = (e: React.MouseEvent) => { e.stopPropagation(); setShowDropdown(false); navigate(`/collections/edit/${collection._id}`); };
  const handleDeleteClick = (e: React.MouseEvent) => { e.stopPropagation(); setShowDropdown(false); setIsDeleteModalOpen(true); };
  const handleView = (e: React.MouseEvent) => { e.stopPropagation(); navigate(`/collections/${collection._id}`); };
  const toggleDropdown = (e: React.MouseEvent) => { e.stopPropagation(); setShowDropdown(!showDropdown); };

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteCollection({ CollectionID: collection._id as string });
      success("Collection Deleted", "The collection has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      if (onRefresh) onRefresh();
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete collection");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="card h-100 shadow-sm border-0 bg-white" onClick={handleView} style={{ cursor: "pointer" }}>
        <div className="card-body d-flex align-items-center">
          <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{ width: "48px", height: "48px", minWidth: "48px" }}>
            <span className="text-success fw-bold text-uppercase">{collection.Name?.substring(0, 1) || "C"}</span>
          </div>
          <div className="flex-grow-1 min-w-0">
            <h5 className="card-title mb-1 text-truncate">{collection.Name || "New Collection"}</h5>
            <p className="card-text text-muted small mb-0 text-truncate-2">{collection.Description || "No description provided."}</p>
          </div>
          <div className="dropdown ms-2" ref={dropdownRef}>
            <button className="btn btn-link text-muted p-0" type="button" onClick={toggleDropdown}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
              </svg>
            </button>
            <ul className={`dropdown-menu dropdown-menu-end ${showDropdown ? "show" : ""}`}>
              <li><button className="dropdown-item" onClick={handleEdit}>Edit</button></li>
              <li><button className="dropdown-item text-danger" onClick={handleDeleteClick}>Delete</button></li>
            </ul>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Collection"
        message={`Are you sure you want to delete the collection "${collection.Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const ListCollectionsPage = () => {
  const navigate = useNavigate();
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fetchCollectionsData = useCallback(() => {
    GetAllCollections()
      .then((res: ICollection[]) => { setCollections(res); setLoading(false); })
      .catch((err: unknown) => { console.log(err); setLoading(false); });
  }, []);

  useEffect(() => { fetchCollectionsData(); }, [fetchCollectionsData, refreshTrigger]);

  const handleRefresh = () => { setLoading(true); setRefreshTrigger((prev) => prev + 1); };

  const totalCollections = collections.length;
  const activeCollections = collections.filter((c) => c.IsActivated).length;
  const inactiveCollections = collections.filter((c) => !c.IsActivated).length;
  const totalProducts = collections.reduce((acc, c) => acc + (c.Products?.length || 0), 0);
  const avgProducts = totalCollections > 0 ? (totalProducts / totalCollections).toFixed(2) : "0.00";

  const overviewCards = [
    { label: "Total Collections", value: totalCollections, icon: "inventory_2", variant: "primary" as const },
    { label: "Active", value: activeCollections, icon: "check_circle", variant: "success" as const },
    { label: "Inactive", value: inactiveCollections, icon: "pause_circle", variant: "warning" as const },
    { label: "Avg. Products", value: avgProducts, icon: "analytics", variant: "info" as const },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Page Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary leading-none">Collections</h2>
          <p className="mt-2 text-on-surface-variant font-medium">Curate and manage your storefront product groupings.</p>
        </div>
        <button onClick={() => navigate("/collections/create")} className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 duration-150">
          <span className="material-symbols-outlined">add</span> Create Collection
        </button>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewCards.map((card, index) => (
          <DashboardOverviewCard key={index} label={card.label} value={card.value} icon={card.icon} variant={card.variant} loading={Loading} />
        ))}
      </div>

      {/* Main List Section */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        {/* List Header */}
        <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary">All Collections</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant"><span className="material-symbols-outlined">filter_list</span></button>
            <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-on-surface-variant"><span className="material-symbols-outlined">download</span></button>
          </div>
        </div>

        {/* Cards */}
        <div className="p-6">
          {Loading ? (
            <div className="py-12 flex justify-center"><LoadingCollections /></div>
          ) : (
            <div className="row g-3">
              {collections.map((collection, index) => (
                <div key={collection._id || index} className="col-12 col-md-6 col-lg-4">
                  <CollectionCard collection={collection} onRefresh={handleRefresh} />
                </div>
              ))}
              {collections.length === 0 && (
                <div className="col-12 py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-2xl shadow-sm border border-dashed border-surface-container-high mt-4">
                  <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant">inventory_2</span>
                  </div>
                  <h4 className="text-xl font-black text-primary mb-2">No Collections Found</h4>
                  <p className="text-sm font-medium text-on-surface-variant text-center max-w-sm mb-6">You don't have any collections yet. Curate and manage your storefront product groupings to get started!</p>
                  <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm" onClick={() => navigate("/collections/create")}>
                    <span className="material-symbols-outlined text-sm">add</span> Create Collection
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-surface-container-low/20 flex items-center justify-between border-t border-surface-container">
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Showing 1 to 4 of 24 results</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest text-primary font-bold shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">3</button>
            <span className="px-2 self-center text-on-surface-variant">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-primary-container text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-center min-h-[200px]">
          <div className="relative z-10">
            <h4 className="text-2xl font-black tracking-tight mb-2">Maximize your visibility.</h4>
            <p className="max-w-md text-on-primary-container text-sm leading-relaxed mb-6 font-medium">Use automated collection rotations to keep your homepage fresh for recurring customers. Predictive analytics can now suggest products for your next curation.</p>
            <button className="bg-white text-primary px-5 py-2 rounded-xl text-sm font-bold transition-transform active:scale-95 duration-150">View Insights</button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary-fixed-dim/20 to-transparent rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-primary-fixed/10 rounded-full blur-2xl"></div>
        </div>
        <div className="bg-tertiary-container text-tertiary-fixed-dim p-8 rounded-xl flex flex-col items-center justify-center text-center gap-4 border border-tertiary">
          <span className="material-symbols-outlined text-5xl">auto_awesome</span>
          <div>
            <p className="text-lg font-bold text-white">Smart Curation</p>
            <p className="text-xs font-medium opacity-80 mt-1">AI-powered grouping for higher conversion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCollectionsPage;
