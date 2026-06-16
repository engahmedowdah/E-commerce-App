import "./CreateCategoryPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { CreateCategory } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { CategoryForm } from "../../components";
import { UpdateProduct } from "../../../Products";
function CreateCategoryPage() {
  const navigate = useNavigate();
  const { error, success } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const handleAddProducts = (newProducts: IProduct[]) => {
    setSelectedProducts((prev) => {
      const prevIDs = new Set(prev.map((p) => p._id as string));
      return [...prev, ...newProducts.filter((p) => !prevIDs.has(p._id as string))];
    });
  };
  const handleRemoveProduct = (productID: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p._id !== productID));
    success("Product Removed", "The product association has been pending removal.");
  };
  const handleSubmit = async (data: ICategory) => {
    setLoading(true);
    try {
      const createdCategory = await CreateCategory({ category: data });
      const newCategoryID = createdCategory._id;
      if (newCategoryID && selectedProducts.length > 0) {
        await Promise.all(
          selectedProducts.map((p) => {
            const existingIDs = (p.CategoryIDs ?? []) as string[];
            if (existingIDs.includes(newCategoryID)) return Promise.resolve();
            return UpdateProduct({
              ProductID: p._id as string,
              product: { CategoryIDs: [...existingIDs, newCategoryID] },
            });
          })
        );
      }
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/categories");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/categories");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <CategoryForm
        mode="create"
        products={selectedProducts}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onAddProducts={handleAddProducts}
        onRemoveProduct={handleRemoveProduct}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Category Created"
        message="Category created successfully"
        buttonText="Go to Categories"
      />
    </div>
  );
}
export default CreateCategoryPage;
