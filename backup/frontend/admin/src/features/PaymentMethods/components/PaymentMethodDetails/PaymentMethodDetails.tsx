import "./PaymentMethodDetails.css";
import { useState } from "react";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import LoadingPaymentMethods from "../ListPaymentMethods/LoadingPaymentMethods/LoadingPaymentMethods";
import { ConfirmModal, useToast } from "../../../../shared/components";
import {
  PaymentMethodDetailsHeader,
  PaymentMethodDetailsTabs,
  PaymentMethodDetailsContent,
} from "./components";
import { DeletePaymentMethod } from "../../../../business/services/PaymentMethods";
import { useNavigate } from "react-router-dom";
interface Props {
  paymentmethod?: IPaymentMethod | null;
  Loading?: boolean;
}
const PaymentMethodDetails = ({ paymentmethod, Loading }: Props) => {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState("Details");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingPaymentMethods />
      </div>
    );
  }
  if (!paymentmethod) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">PaymentMethod Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the paymentmethod details you're looking for.
        </p>
      </div>
    );
  }
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await DeletePaymentMethod({ PaymentMethodID: paymentmethod._id as string });
      success("PaymentMethod Deleted", "The paymentmethod has been successfully moved to trash.");
      setIsDeleteModalOpen(false);
      navigate("/payment-methods");
    } catch (err: unknown) {
      error("Error", (err as Error).message || "Failed to delete paymentmethod");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <PaymentMethodDetailsHeader
        paymentmethod={paymentmethod as IPaymentMethod}
        onDelete={() => setIsDeleteModalOpen(true)}
      />
      <PaymentMethodDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <PaymentMethodDetailsContent
        activeTab={activeTab}
        paymentmethod={paymentmethod as IPaymentMethod}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete PaymentMethod"
        message={`Are you sure you want to delete the paymentmethod "${(paymentmethod as IPaymentMethod).Name}"? This action will move it to the trash.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        type="danger"
      />
    </div>
  );
};
export default PaymentMethodDetails;
