import "./CreateSubcategoryPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { CreateSubcategory } from "../..";
import { UpdateProduct } from "../../../Products";
import { useToast, SuccessModal } from "../../../../shared/components";
import { SubcategoryForm } from "../../components";
function CreateSubcategoryPage() {
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
  const handleSubmit = async (data: ISubcategory) => {
    setLoading(true);
    try {
      const createdSubcategory = await CreateSubcategory({ subcategory: data });
      const newSubcategoryID = createdSubcategory._id;
      if (newSubcategoryID && selectedProducts.length > 0) {
        await Promise.all(
          selectedProducts.map((p) => {
            const existingIDs = (p.SubCategoryIDs ?? []) as string[];
            if (existingIDs.includes(newSubcategoryID)) return Promise.resolve();
            return UpdateProduct({
              ProductID: p._id as string,
              product: { SubCategoryIDs: [...existingIDs, newSubcategoryID] },
            });
          })
        );
      }
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create subcategory");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/subcategories");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/subcategories");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <SubcategoryForm
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
        title="Subcategory Created"
        message="Subcategory created successfully"
        buttonText="Go to Subcategories"
      />
    </div>
  );
}
export default CreateSubcategoryPage;
