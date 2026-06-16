import "./EditCountryPage.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import { GetCountryByID, UpdateCountry } from "../../../../business/services";
import { SuccessModal, useToast } from "../../../../shared/components";
import { CountryForm } from "../../components";
function EditCountryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [country, setCountry] = useState<ICountry | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (id) {
      GetCountryByID({ CountryID: id })
        .then((res) => {
          setCountry(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);
  const handleSubmit = async (data: ICountry) => {
    if (!id) return;
    setSaving(true);
    try {
      await UpdateCountry({ CountryID: id, country: data });
      success("Success", "Country updated successfully");
      setIsSuccessOpen(true);
    } catch (err: unknown) {
      error("Error", (err as { message?: string }).message || "Failed to update country");
    } finally {
      setSaving(false);
    }
  };
  const handleCancel = () => navigate("/countries");
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }
  if (!country) {
    return (
      <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-xl m-8">
        Country not found
      </div>
    );
  }
  return (
    <div className="w-full p-4 md:p-8 bg-gray-50/20 min-h-screen">
      <CountryForm
        mode="edit"
        initialData={country}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={saving}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => { setIsSuccessOpen(false); handleCancel(); }}
        title="Country Updated"
        message="Country updated successfully"
        buttonText="Go to Countries"
      />
    </div>
  );
}
export default EditCountryPage;
