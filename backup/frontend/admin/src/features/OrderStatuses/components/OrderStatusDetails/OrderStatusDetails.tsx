import "./OrderStatusDetails.css";
import { useState } from "react";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import LoadingOrderStatuses from "../ListOrderStatuses/LoadingOrderStatuses/LoadingOrderStatuses";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  OrderStatusDetailsHeader,
  OrderStatusDetailsTabs,
  OrderStatusDetailsContent,
} from "./components";
import { DeleteOrderStatus } from "../../../../business/services/OrderStatuses";
import { useNavigate } from "react-router-dom";
interface Props {
  orderstatus?: IOrderStatus | null;
  Loading?: boolean;
}
const OrderStatusDetails = ({ orderstatus, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingOrderStatuses />
      </div>
    );
  }
  if (!orderstatus) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">OrderStatus Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the orderstatus details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeleteOrderStatus({ OrderStatusID: orderstatus._id as string });
      success("OrderStatus Deleted", "The orderstatus has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/order-statuses");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete orderstatus");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <OrderStatusDetailsHeader
        orderstatus={orderstatus as IOrderStatus}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <OrderStatusDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <OrderStatusDetailsContent
        activeTab={activeTab}
        orderstatus={orderstatus as IOrderStatus}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete OrderStatus"
        message={`Are you sure you want to delete the orderstatus "${(orderstatus as IOrderStatus).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default OrderStatusDetails;
