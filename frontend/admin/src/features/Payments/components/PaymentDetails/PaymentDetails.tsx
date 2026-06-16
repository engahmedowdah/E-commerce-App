import "./PaymentDetails.css";
import { useState } from "react";
import type { IPayment } from "../../../../shared/types/Payments/IPayment.types";
import LoadingPayments from "../ListPayments/LoadingPayments/LoadingPayments";
import {
  PaymentDetailsHeader,
  PaymentDetailsTabs,
  PaymentDetailsContent,
} from "./components";
interface Props {
  payment?: IPayment | null;
  Loading?: boolean;
}
const PaymentDetails = ({ payment, Loading }: Props) => {
  const [activeTab, setActiveTab] = useState("Details");
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingPayments />
      </div>
    );
  }
  if (!payment) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Payment Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the payment details you're looking for.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <PaymentDetailsHeader
        payment={payment as IPayment}
      />
      <PaymentDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <PaymentDetailsContent
        activeTab={activeTab}
        payment={payment as IPayment}
      />
    </div>
  );
};
export default PaymentDetails;
