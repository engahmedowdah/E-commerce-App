import "./PaymentStatusDetails.css";
import { useState } from "react";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import LoadingPaymentStatuses from "../ListPaymentStatuses/LoadingPaymentStatuses/LoadingPaymentStatuses";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  PaymentStatusDetailsHeader,
  PaymentStatusDetailsTabs,
  PaymentStatusDetailsContent,
} from "./components";
import { DeletePaymentStatus } from "../../../../business/services/PaymentStatuses";
import { useNavigate } from "react-router-dom";
interface Props {
  paymentstatus?: IPaymentStatus | null;
  Loading?: boolean;
}
const PaymentStatusDetails = ({ paymentstatus, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingPaymentStatuses />
      </div>
    );
  }
  if (!paymentstatus) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">PaymentStatus Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the paymentstatus details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeletePaymentStatus({ PaymentStatusID: paymentstatus._id as string });
      success("PaymentStatus Deleted", "The paymentstatus has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/paymentstatuses");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete paymentstatus");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <PaymentStatusDetailsHeader
        paymentstatus={paymentstatus as IPaymentStatus}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <PaymentStatusDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <PaymentStatusDetailsContent
        activeTab={activeTab}
        paymentstatus={paymentstatus as IPaymentStatus}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Payment Status"
        message={`Are you sure you want to delete the payment status "${(paymentstatus as IPaymentStatus).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default PaymentStatusDetails;
