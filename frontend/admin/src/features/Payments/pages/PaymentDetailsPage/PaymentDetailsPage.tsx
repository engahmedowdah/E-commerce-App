import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IPayment } from "../../../../shared/types/Payments/IPayment.types";
import { GetPaymentByID } from "../../../../business/services";
import { PaymentDetails } from "../../components";
import "./PaymentDetailsPage.css";
const PaymentDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [payment, setPayment] = useState<IPayment | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetPaymentByID({ PaymentID: id })
      .then((res: IPayment) => {
        setPayment(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <PaymentDetails payment={payment} Loading={Loading} />
    </div>
  );
};
export default PaymentDetailsPage;
