import "./EditProductPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { GetProductByID, UpdateProduct } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { ProductForm } from "../../components";
function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetProductByID({ ProductID: id })
        .then((res) => {
          setProduct(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: IProduct) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdateProduct({ ProductID: id, product: data });
      success("Success", "Product updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update product");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/products");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Product not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <ProductForm
        mode="edit"
        initialData={product}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Product Updated"
        message="Product updated successfully"
        buttonText="Go to Products"
      />
    </div>
  );
}
export default EditProductPage;
