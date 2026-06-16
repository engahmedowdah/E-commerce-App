import "./CategoryDetails.css";
import { useState } from "react";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import LoadingCategories from "../ListCategories/LoadingCategories/LoadingCategories";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  CategoryDetailsHeader,
  CategoryDetailsTabs,
  CategoryDetailsContent,
} from "./components";
import { DeleteCategory } from "../../../../business/services/Categories";
import { useNavigate } from "react-router-dom";
interface Props {
  category?: ICategory | null;
  Loading?: boolean;
}
const CategoryDetails = ({ category, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingCategories />
      </div>
    );
  }
  if (!category) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Category Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the category details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteCategory({ CategoryID: category._id as string });
      success("Category Deleted", "The category has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/categories");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete category");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <CategoryDetailsHeader
        category={category as ICategory}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <CategoryDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CategoryDetailsContent
        activeTab={activeTab}
        category={category as ICategory}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Category"
        message={`Are you sure you want to delete the category "${(category as ICategory).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default CategoryDetails;
