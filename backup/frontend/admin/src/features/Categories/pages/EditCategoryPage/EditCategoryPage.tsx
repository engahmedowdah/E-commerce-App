import "./EditCategoryPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { GetCategoryByID, UpdateCategory, UpdateProduct } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { CategoryForm } from "../../components";
function EditCategoryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [category, setCategory] = useState<ICategory | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetCategoryByID({ CategoryID: id })
        .then((res) => {
          setCategory(res);
          setProducts((res as ICategory).Products ?? []);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: ICategory) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdateCategory({ CategoryID: id, category: data });
      success("Success", "Category updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update category");
    } finally {
      setSaving(false);
    }
  };
  const handleAddProducts = async (newProducts: IProduct[]) => {
    if (!id) return;
    try {
      await Promise.all(
        newProducts.map((p) => {
          const existingIDs: string[] = (p.CategoryIDs ?? []) as string[];
          if (existingIDs.includes(id)) return Promise.resolve();
          return UpdateProduct({
            ProductID: p._id as string,
            product: { ...p, CategoryIDs: [...existingIDs, id] } as unknown as IProduct,
          });
        })
      );
      setProducts((prev) => {
        const prevIDs = new Set(prev.map((p) => p._id as string));
        return [...prev, ...newProducts.filter((p) => !prevIDs.has(p._id as string))];
      });
      success("Products Added", `${newProducts.length} product(s) linked to this category.`);
    } catch (err: unknown) {
      error("Error", "Failed to link some products. Please try again.");
    }
  };
  const handleRemoveProduct = async (productID: string) => {
    if (!id) return;
    try {
      const product = products.find((p) => p._id === productID);
      if (!product) return;
      const updatedIDs = ((product.CategoryIDs ?? []) as string[]).filter((cid) => cid !== id);
      await UpdateProduct({
        ProductID: productID,
        product: { ...product, CategoryIDs: updatedIDs } as unknown as IProduct,
      });
      setProducts((prev) => prev.filter((p) => p._id !== productID));
      success("Product Unlinked", "The product has been removed from this category.");
    } catch (err: unknown) {
      error("Error", "Failed to unlink product.");
    }
  };
  const handleCancel = () => navigate("/categories");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!category) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Category not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <CategoryForm
        mode="edit"
        initialData={category}
        products={products}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onAddProducts={handleAddProducts}
        onRemoveProduct={handleRemoveProduct}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Category Updated"
        message="Category updated successfully"
        buttonText="Go to Categories"
      />
    </div>
  );
}
export default EditCategoryPage;
