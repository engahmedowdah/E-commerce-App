import "./CreateCountryPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import { CreateCountry } from "../..";
import { useToast, SuccessModal } from "../../../../shared/components";
import { CountryForm } from "../../components";
function CreateCountryPage() {
  const navigate = useNavigate();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleSubmit = async (data: ICountry) => {
    setLoading(true);
    try {
      await CreateCountry({ country: data });
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to create country");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => navigate("/countries");
  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/countries");
  };
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <CountryForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
        title="Country Created"
        message="Country created successfully"
        buttonText="Go to Countries"
      />
    </div>
  );
}
export default CreateCountryPage;
