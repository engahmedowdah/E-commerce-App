import "./CollectionDetails.css";
import { useState } from "react";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import LoadingProducts from "../../../Products/components/ListProducts/LoadingProducts/LoadingProducts";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  CollectionDetailsHeader,
  CollectionDetailsTabs,
  CollectionDetailsContent,
} from "./components";
import { DeleteCollection } from "../../../../business/services/Collections";
import { useNavigate } from "react-router-dom";
interface Props {
  collection?: ICollection | null;
  Loading?: boolean;
}
const CollectionDetails = ({ collection, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingProducts />
      </div>
    );
  }
  if (!collection) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Collection Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the collection details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteCollection({ CollectionID: collection._id as string });
      success("Collection Deleted", "The collection has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/collections");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete collection");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <CollectionDetailsHeader
        collection={collection as ICollection}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <CollectionDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CollectionDetailsContent
        activeTab={activeTab}
        collection={collection as ICollection}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Collection"
        message={`Are you sure you want to delete the collection "${(collection as ICollection).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default CollectionDetails;
