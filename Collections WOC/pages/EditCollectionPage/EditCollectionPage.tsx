// Styles
import "./EditCollectionPage.css";

// React Library
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// Types
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";

// Services
import { GetCollectionByID, UpdateCollection, DeleteProduct } from "../../../../business/services";

// Shared Components
import { SuccessModal, useToast, ConfirmModal } from "../../../../shared/components";

function EditCollectionPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [collection, setCollection] = useState<ICollection | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Product delete modal state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Slug: "",
    IsActivated: false,
  });

  useEffect(() => {
    if (id) {
      GetCollectionByID({ CollectionID: id })
        .then((res) => {
          setCollection(res);
          setFormData({
            Name: res.Name || "",
            Description: res.Description || "",
            Slug: res.Slug || "",
            IsActivated: res.IsActivated ?? false,
          });
          setLoading(false);
        })
        .catch((err) => { console.error(err); setLoading(false); });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const generateSlug = () => {
    const slug = formData.Name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setFormData((prev) => ({ ...prev, Slug: slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSaving(true);
    try {
      await UpdateCollection({ CollectionID: id, collection: formData as ICollection });
      success("Success", "Collection updated successfully");
      setIsSuccessOpen(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => navigate("/collections");

  const handleDeleteProduct = (productID: string) => {
    setProductToDelete(productID);
    setIsProductModalOpen(true);
  };

  const confirmDeleteProduct = async () => {
    if (!productToDelete) return;
    try {
      await DeleteProduct({ ProductID: productToDelete });
      success("Product Removed", "The product has been removed from this collection.");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to remove product");
    } finally {
      setIsProductModalOpen(false);
      setProductToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Collection not found
      </div>
    );
  }

  const products = (collection.Products as IProduct[]) || [];

  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-6xl mx-auto">

        {/* ── Form Header ─────────────────────────────────────────────────── */}
        <div className="flex justify-between items-end pb-2">
          <div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-3">
              <Link to="/collections" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span className="font-medium">Collections</span>
              </Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Update Collection</span>
            </div>
            <h1 className="text-[38px] font-bold text-gray-900 mb-3 tracking-tight">{formData.Name || "Update Collection"}</h1>
            <p className="text-[15px] text-gray-600 max-w-xl leading-relaxed">Update collection details, hero imagery, and associated products.</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-lg bg-gray-200/60 text-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="px-6 py-2.5 rounded-lg bg-[#111827] text-white font-bold text-sm hover:bg-black transition-colors flex items-center gap-2 shadow-sm">
              {saving && <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>}
              Update Collection
            </button>
          </div>
        </div>

        {/* ── Hero Image (edit) ────────────────────────────────────────────── */}
        <div className="w-full h-[280px] bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-100 rounded-[20px] overflow-hidden flex items-center justify-center relative shadow-sm border border-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[200px] h-full bg-[#EAB308] border-[12px] border-b-0 border-[#FEF08A] rounded-t-[40px] relative shadow-2xl flex flex-col items-center pt-10">
              <div className="flex gap-12 mb-6">
                <div className="w-6 h-6 bg-[#422006] rounded-full"></div>
                <div className="w-6 h-6 bg-[#422006] rounded-full"></div>
              </div>
              <div className="w-20 h-16 bg-[#422006] rounded-xl flex items-center justify-center mb-6">
                <div className="w-4 h-5 bg-white/20 rounded"></div>
              </div>
              <div className="w-24 h-3 bg-[#422006] rounded-full"></div>
            </div>
          </div>
          <button type="button" className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-[12px] text-[13px] font-bold text-gray-900 flex items-center gap-2 shadow-sm hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">photo_camera</span> Change Cover
          </button>
        </div>

        {/* ── Body Grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Left: General Info + Associated Products */}
          <div className="md:col-span-8 flex flex-col gap-6">
            {/* General Info */}
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[17px] font-bold text-gray-900 mb-8">Collection Details</h3>
              <div className="mb-6">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Collection Title</label>
                <input type="text" name="Name" value={formData.Name} onChange={handleChange} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="Summer Sale 2024" />
              </div>
              <div className="mb-6">
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Slug</label>
                <div className="flex gap-3">
                  <input type="text" name="Slug" value={formData.Slug} onChange={handleChange} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="summer-sale-2024" />
                  <button type="button" onClick={generateSlug} className="px-5 bg-[#F3F4F6] hover:bg-gray-200 text-gray-600 font-bold text-[14px] rounded-[12px] transition-colors whitespace-nowrap">Generate</button>
                </div>
              </div>
              <div>
                <label className="block text-[12px] text-gray-500 tracking-widest uppercase font-bold mb-2">Editorial Description</label>
                <textarea name="Description" value={formData.Description} onChange={handleChange} rows={5} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-4 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="Our annual curated selection of seasonal essentials..."></textarea>
              </div>
            </div>

            {/* Associated Products */}
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[17px] font-bold text-gray-900">Associated Products</h3>
                <button type="button" className="text-[14px] font-bold text-gray-900 flex items-center gap-1.5 hover:text-gray-600 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span> Add Products
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {products.length > 0 ? (
                  products.map((product: IProduct) => (
                    <div key={product._id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group cursor-default border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] bg-slate-200 rounded-[10px] overflow-hidden flex items-center justify-center">
                          <div className="w-8 h-8 bg-slate-100 rounded-sm shadow-sm rotate-3"></div>
                        </div>
                        <div>
                          <div className="font-bold text-[15px] text-gray-900 mb-0.5">{product.Name}</div>
                          <div className="text-[13px] text-gray-500 font-medium">SKU: {product.Name} &nbsp;•&nbsp; ${product.Price}</div>
                        </div>
                      </div>
                      <button type="button" className="text-red-600/80 hover:text-red-700 p-2 transition-all mr-2" onClick={() => handleDeleteProduct(product._id as string)}>
                        <span className="material-symbols-outlined text-[18px] cursor-pointer">delete</span>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-4">No associated products</div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Visibility + Publishing + SEO */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Collection Status */}
            <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-5 mt-1">
                <h3 className="text-[16px] font-bold text-gray-900">Collection Status</h3>
                <span className="px-2 py-0.5 bg-[#064E3B] text-white text-[10px] font-bold uppercase tracking-wider rounded">Live</span>
              </div>
              <div className="bg-[#F9FAFB] rounded-[16px] p-4 flex items-center justify-between border border-gray-100">
                <div>
                  <div className="font-bold text-[14px] text-gray-900 mb-0.5">Active</div>
                  <div className="text-[12px] text-gray-500">Visible to customers</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" name="IsActivated" checked={formData.IsActivated} onChange={handleChange} className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#111827]"></div>
                </label>
              </div>
            </div>

            {/* Publishing */}
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[16px] font-bold text-gray-900 mb-6 mt-1">Publishing</h3>
              <div className="mb-5">
                <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">Start Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-[18px] text-gray-400">calendar_today</span>
                  <input type="text" readOnly value="June 01, 2024" className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] pl-11 pr-4 py-3.5 text-[14px] font-medium text-gray-900 focus:outline-none cursor-default" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-3">End Date</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3.5 text-[18px] text-gray-400">calendar_today</span>
                  <input type="text" readOnly value="August 31, 2024" className="w-full bg-[#F9FAFB] border border-gray-100 rounded-[12px] pl-11 pr-4 py-3.5 text-[14px] font-medium text-gray-900 focus:outline-none cursor-default" />
                </div>
              </div>
            </div>

            {/* SEO Preview */}
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6 mt-1">
                <h3 className="text-[16px] font-bold text-gray-900">SEO Preview</h3>
                <button type="button" className="text-[12px] font-bold text-gray-900 hover:text-gray-600 transition-colors">Edit</button>
              </div>
              <div className="bg-[#F8FAFC] p-5 rounded-[16px] border border-blue-100/50">
                <div className="text-[17px] font-medium text-[#1E3A8A] mb-1.5 leading-snug">{formData.Name || "Summer Sale 2024"} | Premium Seasonal Collection</div>
                <div className="text-[13px] text-[#166534] mb-2.5 truncate font-medium">www.curator-store.com › collections › {formData.Slug || "summer-2024"}</div>
                <div className="text-[13px] text-[#475569] line-clamp-2 leading-relaxed">
                  {formData.Description || "Discover the Summer Sale 2024 collection. High-end linen wear, expertly tailored to match modern lifestyle and ultimate comfort."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Product delete confirm modal */}
      <ConfirmModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onConfirm={confirmDeleteProduct}
        title="Confirm Removal"
        message="This product will be removed from this collection and deleted from the inventory. This action can be undone later by restoring from trash."
        confirmText="Remove"
        cancelText="Cancel"
        type="danger"
      />

      {/* Success modal */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Collection Updated"
        message="Collection updated successfully"
        buttonText="Go to Collections"
      />
    </div>
  );
}

export default EditCollectionPage;
