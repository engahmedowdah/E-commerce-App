import "./CreateCollectionPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { CreateCollection } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import CollectionForm from "../../components/CollectionForm/CollectionForm";
import { UpdateProduct } from "../../../Products";
function CreateCollectionPage() {
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
  const handleSubmit = async (data: ICollection) => {
    setLoading(true);
    try {
      const createdCollection = await CreateCollection({ collection: data });
      const newCollectionID = createdCollection._id;
      if (newCollectionID && selectedProducts.length > 0) {
        await Promise.all(
          selectedProducts.map((p) => {
            const existingIDs = (p.CollectionIDs ?? []) as string[];
            if (existingIDs.includes(newCollectionID)) return Promise.resolve();
            return UpdateProduct({
              ProductID: p._id as string,
              product: { CollectionIDs: [...existingIDs, newCollectionID] },
            });
          })
        );
      }
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create collection");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => {
    navigate("/collections");
  };
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/collections");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <CollectionForm
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
        title="Collection Created"
        message="Collection created successfully"
        buttonText="Go to Collections"
      />
    </div>
  );
}
export default CreateCollectionPage;
