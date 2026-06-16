import "./CreateProductPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { CreateProduct } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { ProductForm } from "../../components";
function CreateProductPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: IProduct) => {
    setLoading(true);
    try {
      await CreateProduct({ product: data });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create product");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/products");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/products");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <ProductForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Product Created"
        message="Product created successfully"
        buttonText="Go to Products"
      />
    </div>
  );
}
export default CreateProductPage;
