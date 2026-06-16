import "./SubcategoryDetails.css";
import { useState } from "react";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import LoadingSubcategories from "../ListSubcategories/LoadingSubcategories/LoadingSubcategories";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  SubcategoryDetailsHeader,
  SubcategoryDetailsTabs,
  SubcategoryDetailsContent,
} from "./components";
import { useNavigate } from "react-router-dom";
import { DeleteSubcategory } from "../../../Subcategories/services";
interface Props {
  subcategory?: ISubcategory | null;
  Loading?: boolean;
}
const SubcategoryDetails = ({ subcategory, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingSubcategories />
      </div>
    );
  }
  if (!subcategory) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Subcategory Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the subcategory details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteSubcategory({ SubcategoryID: subcategory._id as string });
      success("Subcategory Deleted", "The subcategory has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/subcategories");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete subcategory");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <SubcategoryDetailsHeader
        subcategory={subcategory as ISubcategory}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <SubcategoryDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SubcategoryDetailsContent
        activeTab={activeTab}
        subcategory={subcategory as ISubcategory}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Subcategory"
        message={`Are you sure you want to delete the subcategory "${(subcategory as ISubcategory).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default SubcategoryDetails;
