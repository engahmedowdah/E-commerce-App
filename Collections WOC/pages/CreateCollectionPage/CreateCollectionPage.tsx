// Styles
import "./CreateCollectionPage.css";

// React Library
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Types
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";

// Services
import { CreateCollection } from "../..";

// Shared Components
import { useToast, SuccessModal } from "../../../../shared/components";

function CreateCollectionPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Slug: "",
    IsActivated: false,
  });

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
    setLoading(true);
    try {
      await CreateCollection({ collection: formData as ICollection });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      console.error(err);
      error("Error", (err as { message?: string }).message || "Failed to create collection");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => navigate("/collections");
  const handleSuccessClose = () => { setIsSuccessModalOpen(false); navigate("/collections"); };

  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-7xl mx-auto">

        {/* ── Form Header ─────────────────────────────────────────────────── */}
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
              <Link to="/collections" className="flex items-center gap-1 hover:text-primary transition-colors hover-translate-y">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                <span className="font-medium">Collections</span>
              </Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <span className="text-on-surface font-semibold">Add New Collection</span>
            </div>
            <h1 className="text-[40px] font-bold text-gray-900 mb-3 tracking-tight">Create Collection</h1>
            <p className="text-[15px] text-gray-600 max-w-xl leading-relaxed">
              Curate a new series of luxury items for the global marketplace. Defined by elegance and editorial precision.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={handleCancel} className="px-6 py-2.5 rounded-lg bg-gray-200/60 text-gray-800 font-bold text-sm hover:bg-gray-200 transition-colors">
              Discard
            </button>
            <button type="submit" disabled={loading} className="px-6 py-2.5 rounded-lg bg-[#111827] text-white font-bold text-sm hover:bg-black transition-colors flex items-center gap-2 shadow-sm">
              {loading && <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>}
              Save Collection
            </button>
          </div>
        </div>

        {/* ── Body Grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Hero Image */}
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-widest uppercase mb-6">Hero Image</h3>
              <div className="aspect-[4/5] bg-[#F1E5D1] rounded-[16px] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-8 left-4 w-16 h-8 bg-white/40 rounded-full blur-[2px]"></div>
                <div className="absolute top-16 right-8 w-20 h-10 bg-white/40 rounded-full blur-[2px]"></div>
                <div className="w-14 h-14 bg-[#111827] rounded-full flex items-center justify-center text-white mb-4 shadow-lg z-10 cursor-pointer hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">cloud_upload</span>
                </div>
                <span className="font-bold text-gray-900 text-[15px] z-10">Upload Cover</span>
                <span className="text-[13px] font-semibold text-gray-600 mt-1.5 z-10">Recommended 1200×1500px</span>
                <div className="absolute bottom-10 font-bold text-white/50 text-2xl tracking-widest uppercase">Placeholder</div>
              </div>
            </div>

            {/* Visibility */}
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[13px] font-bold text-gray-900 tracking-widest uppercase mb-8">Visibility</h3>
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-medium text-gray-800">Publish on save</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" name="IsActivated" checked={formData.IsActivated} onChange={handleChange} className="sr-only peer" />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#111827]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            {/* General Info */}
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="text-[13px] tracking-widest uppercase font-bold text-gray-900 mb-8">General Information</h3>
              <div className="mb-6">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Collection Name</label>
                <input type="text" name="Name" value={formData.Name} onChange={handleChange} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="e.g. Winter Solstice 2024" />
              </div>
              <div className="mb-6">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Slug</label>
                <div className="flex gap-3">
                  <input type="text" name="Slug" value={formData.Slug} onChange={handleChange} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="e.g. winter-solstice-2024" />
                  <button type="button" onClick={generateSlug} className="px-5 bg-[#F3F4F6] hover:bg-gray-200 text-gray-600 font-bold text-[14px] rounded-[12px] transition-colors whitespace-nowrap">Auto-generate</button>
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-[14px] text-gray-900 font-bold mb-2">Description</label>
                <textarea name="Description" value={formData.Description} onChange={handleChange} rows={6} className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-4 text-[15px] focus:bg-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-colors placeholder:text-gray-400" placeholder="Describe the soul and story of this collection..."></textarea>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-bold text-gray-900 mb-2">Display Style</label>
                  <div className="relative">
                    <select className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:outline-none appearance-none font-medium text-gray-800"><option>Editorial Grid</option></select>
                    <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-gray-900 mb-2">Sorting Priority</label>
                  <div className="relative">
                    <select className="w-full bg-[#F3F4F6] border-none rounded-[12px] px-5 py-3.5 text-[15px] focus:outline-none appearance-none font-medium text-gray-800"><option>Manual Position</option></select>
                    <span className="material-symbols-outlined absolute right-4 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SEO Preview */}
              <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-[13px] font-bold text-gray-900 tracking-widest uppercase flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-[20px]">search</span> SEO PREVIEW
                  </h3>
                  <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">Customize how this collection appears in search engines like Google.</p>
                </div>
                <button type="button" className="text-[14px] font-bold text-gray-900 hover:text-gray-600 flex items-center gap-1.5 self-start">
                  Edit SEO Settings <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </button>
              </div>

              {/* Automation */}
              <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-[13px] font-bold text-gray-900 tracking-widest uppercase flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-[20px] text-emerald-600">auto_fix</span> AUTOMATION
                  </h3>
                  <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">Automatically add products based on tags or categories.</p>
                </div>
                <button type="button" className="text-[14px] font-bold text-white bg-[#064E3B] hover:bg-[#064E3B]/90 px-5 py-2.5 rounded-lg self-start transition-colors">
                  Configure Rules
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Collection Created"
        message="Collection created successfully"
        buttonText="Go to Collections"
      />
    </div>
  );
}

export default CreateCollectionPage;
