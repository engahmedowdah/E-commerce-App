import "./EditSubcategoryPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { GetSubcategoryByID, UpdateSubcategory, UpdateProduct } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { SubcategoryForm } from "../../components";
function EditSubcategoryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [subcategory, setSubcategory] = useState<ISubcategory | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetSubcategoryByID({ SubcategoryID: id })
        .then((res) => {
          setSubcategory(res);
          setProducts((res as ISubcategory).Products ?? []);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: ISubcategory) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdateSubcategory({ SubcategoryID: id, subcategory: data });
      success("Success", "Subcategory updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update subcategory");
    } finally {
      setSaving(false);
    }
  };
  const handleAddProducts = async (newProducts: IProduct[]) => {
    if (!id) return;
    try {
      await Promise.all(
        newProducts.map((p) => {
          const existingIDs: string[] = (p.SubCategoryIDs ?? []) as string[];
          if (existingIDs.includes(id)) return Promise.resolve();
          return UpdateProduct({
            ProductID: p._id as string,
            product: { ...p, SubCategoryIDs: [...existingIDs, id] } as unknown as IProduct,
          });
        })
      );
      setProducts((prev) => {
        const prevIDs = new Set(prev.map((p) => p._id as string));
        return [...prev, ...newProducts.filter((p) => !prevIDs.has(p._id as string))];
      });
      success("Products Added", `${newProducts.length} product(s) linked to this subcategory.`);
    } catch (err) {
      error("Error", "Failed to link some products. Please try again.");
    }
  };
  const handleRemoveProduct = async (productID: string) => {
    if (!id) return;
    try {
      const product = products.find((p) => p._id === productID);
      if (!product) return;
      const updatedIDs = ((product.SubCategoryIDs ?? []) as string[]).filter((sid) => sid !== id);
      await UpdateProduct({
        ProductID: productID,
        product: { ...product, SubCategoryIDs: updatedIDs } as unknown as IProduct,
      });
      setProducts((prev) => prev.filter((p) => p._id !== productID));
      success("Product Unlinked", "The product has been removed from this subcategory.");
    } catch (err) {
      error("Error", "Failed to unlink product.");
    }
  };
  const handleCancel = () => navigate("/subcategories");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!subcategory) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Subcategory not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <SubcategoryForm
        mode="edit"
        initialData={subcategory}
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
        title="Subcategory Updated"
        message="Subcategory updated successfully"
        buttonText="Go to Subcategories"
      />
    </div>
  );
}
export default EditSubcategoryPage;
