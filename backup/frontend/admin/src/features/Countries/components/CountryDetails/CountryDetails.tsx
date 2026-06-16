import "./CountryDetails.css";
import { useState } from "react";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import LoadingCountries from "../ListCountries/LoadingCountries/LoadingCountries";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  CountryDetailsHeader,
  CountryDetailsTabs,
  CountryDetailsContent,
} from "./components";
import { DeleteCountry } from "../../../../business/services/Countries";
import { useNavigate } from "react-router-dom";
interface Props {
  country?: ICountry | null;
  Loading?: boolean;
}
const CountryDetails = ({ country, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingCountries />
      </div>
    );
  }
  if (!country) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Country Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the country details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteCountry({ CountryID: country._id as string });
      success("Country Deleted", "The country has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/countries");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete country");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <CountryDetailsHeader
        country={country as ICountry}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <CountryDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CountryDetailsContent
        activeTab={activeTab}
        country={country as ICountry}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Country"
        message={`Are you sure you want to delete the country "${(country as ICountry).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default CountryDetails;
