import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import { GetPaymentStatusByID } from "../../../../business/services";
import { PaymentStatusDetails } from "../../components";
import "./PaymentStatusDetailsPage.css";
const PaymentStatusDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [paymentstatus, setPaymentStatus] = useState<IPaymentStatus | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetPaymentStatusByID({ PaymentStatusID: id })
      .then((res: IPaymentStatus) => {
        setPaymentStatus(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <PaymentStatusDetails paymentstatus={paymentstatus} Loading={Loading} />
    </div>
  );
};
export default PaymentStatusDetailsPage;
