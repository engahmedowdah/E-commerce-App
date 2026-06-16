import React, { useEffect, useState, useRef, useCallback } from "react";
import type { IProduct } from "../../types/Products/IProduct.types";
import type { ICategory } from "../../types/Categories/ICategory.types";
import type { ICollection } from "../../types/Collections/ICollection.types";
import type { ISubcategory } from "../../types/Subcategories/ISubcategory.types";
import { GetAllProducts } from "../../../business/services";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddProducts: (products: IProduct[]) => void;
  existingProductIDs?: string[];
  title?: string;
  pageType?: "category" | "collection" | "subcategory";
}
const ProductSelectionModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onAddProducts,
  existingProductIDs = [],
  title = "Add Products",
  pageType,
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const searchRef = useRef<HTMLInputElement>(null);
  const fetchProducts = useCallback(async (pageNum: number, q: string) => {
    setLoading(true);
    try {
      const res = await GetAllProducts({ page: pageNum, limit: 20, sort: "name_asc" });
      const filtered = q
        ? res.data.filter((p) => p.Name.toLowerCase().includes(q.toLowerCase()))
        : res.data;
      setProducts(filtered);
      setTotalPages(res.meta?.totalPages ?? 1);
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setPage(1);
      fetchProducts(1, search);
    }, 350);
    return () => clearTimeout(timer);
  }, [search, isOpen, fetchProducts]);
  useEffect(() => {
    if (!isOpen) return;
    fetchProducts(page, search);
  }, [page, fetchProducts, isOpen, search]);
  useEffect(() => {
    if (isOpen) {
      setSelected(new Set());
      setSearch("");
      setPage(1);
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const handleAddSelected = () => {
    const selectedProducts = products.filter(
      (p) => selected.has(p._id as string)
    );
    onAddProducts(selectedProducts);
    onClose();
  };
  const alreadyAssociated = (id: string) => existingProductIDs.includes(id);
  const renderRelationships = (product: IProduct) => {
    const badges: React.ReactNode[] = [];
    const categoriesBadge = product.Categories && product.Categories.length > 0 && (
      <div key="categories" className="flex items-center gap-1 flex-wrap">
        <span className="font-semibold uppercase tracking-wider text-[8px] bg-blue-50 text-blue-700 px-1 py-0.2 rounded">Categories</span>
        <span className="text-gray-600 truncate max-w-xs">{product.Categories.map((c: ICategory) => c.Name).join(", ")}</span>
      </div>
    );
    const collectionsBadge = product.Collections && product.Collections.length > 0 && (
      <div key="collections" className="flex items-center gap-1 flex-wrap">
        <span className="font-semibold uppercase tracking-wider text-[8px] bg-amber-50 text-amber-700 px-1 py-0.2 rounded">Collections</span>
        <span className="text-gray-600 truncate max-w-xs">{product.Collections.map((c: ICollection) => c.Name).join(", ")}</span>
      </div>
    );
    const subcategoriesBadge = product.Subcategories && product.Subcategories.length > 0 && (
      <div key="subcategories" className="flex items-center gap-1 flex-wrap">
        <span className="font-semibold uppercase tracking-wider text-[8px] bg-indigo-50 text-indigo-700 px-1 py-0.2 rounded">Subcategories</span>
        <span className="text-gray-600 truncate max-w-xs">{product.Subcategories.map((c: ISubcategory) => c.Name).join(", ")}</span>
      </div>
    );
    if (pageType === "category") {
      if (categoriesBadge) badges.push(categoriesBadge);
      if (collectionsBadge) badges.push(collectionsBadge);
      if (subcategoriesBadge) badges.push(subcategoriesBadge);
    } else if (pageType === "collection") {
      if (collectionsBadge) badges.push(collectionsBadge);
      if (categoriesBadge) badges.push(categoriesBadge);
      if (subcategoriesBadge) badges.push(subcategoriesBadge);
    } else if (pageType === "subcategory") {
      if (subcategoriesBadge) badges.push(subcategoriesBadge);
      if (categoriesBadge) badges.push(categoriesBadge);
      if (collectionsBadge) badges.push(collectionsBadge);
    } else {
      if (categoriesBadge) badges.push(categoriesBadge);
      if (collectionsBadge) badges.push(collectionsBadge);
      if (subcategoriesBadge) badges.push(subcategoriesBadge);
    }
    return badges;
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden"
        style={{ maxHeight: "85vh" }}>
        <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-[18px] font-bold text-gray-900">{title}</h2>
            <p className="text-[13px] text-gray-500 mt-0.5">
              {selected.size > 0
                ? `${selected.size} product${selected.size > 1 ? "s" : ""} selected`
                : "Search and select products to associate"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-gray-600">close</span>
          </button>
        </div>
        <div className="px-7 py-4 border-b border-gray-50">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-gray-400">
              search
            </span>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search products by name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#F3F4F6] rounded-[12px] pl-11 pr-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-all"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400 gap-2">
              <span className="material-symbols-outlined text-[36px]">inventory_2</span>
              <span className="text-[14px] font-medium">No products found</span>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              {products.map((product) => {
                const id = product._id as string;
                const isExisting = alreadyAssociated(id);
                const isSelected = selected.has(id);
                return (
                  <button
                    key={id}
                    type="button"
                    disabled={isExisting}
                    onClick={() => !isExisting && toggleSelect(id)}
                    className={`w-full flex items-start gap-4 px-4 py-3.5 rounded-[14px] text-left transition-all border ${
                      isExisting
                        ? "bg-gray-50 border-transparent opacity-50 cursor-default"
                        : isSelected
                        ? "bg-indigo-50 border-indigo-200"
                        : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-100"
                    }`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[10px] flex-shrink-0 overflow-hidden flex items-center justify-center mt-0.5">
                      {product.Images?.[0] ? (
                        <img
                          src={(product.Images[0] as unknown as { URL?: string })?.URL}
                          alt={product.Name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-[20px] text-slate-400">
                          inventory_2
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[14px] text-gray-900 truncate leading-snug">{product.Name}</div>
                      <div className="text-[12px] text-gray-500 font-semibold flex items-center gap-1.5 flex-wrap mt-0.5">
                        <span>${product.Price?.toLocaleString() ?? "—"}</span>
                        <span>•</span>
                        <span>Stock: {product.Stock ?? "—"}</span>
                      </div>
                      <div className="flex flex-col gap-1 mt-2 text-[10.5px] text-gray-400 font-medium">
                        {renderRelationships(product)}
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-0.5">
                      {isExisting ? (
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1 bg-gray-100 rounded-full">
                          Added
                        </span>
                      ) : (
                        <div
                          className={`w-5 h-5 rounded-[5px] border-2 flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-indigo-600 border-indigo-600"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isSelected && (
                            <span className="material-symbols-outlined text-white text-[14px]">check</span>
                          )}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 px-7 py-3 border-t border-gray-50">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-40 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <span className="text-[13px] text-gray-600 font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-40 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        )}
        <div className="flex items-center justify-between px-7 py-4 border-t border-gray-100 bg-gray-50/50">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-700 font-semibold text-[14px] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={selected.size === 0}
            onClick={handleAddSelected}
            className="px-6 py-2.5 rounded-[10px] bg-gray-900 text-white font-bold text-[14px] hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            Add {selected.size > 0 ? `${selected.size} ` : ""}Product{selected.size !== 1 ? "s" : ""}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductSelectionModal;
