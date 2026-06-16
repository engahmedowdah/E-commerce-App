import "./PaymentMethodDetailsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import { GetPaymentMethodByID } from "../../../../business/services";
import PaymentMethodDetails from "../../components/PaymentMethodDetails/PaymentMethodDetails";
const PaymentMethodDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [paymentmethod, setPaymentMethod] = useState<IPaymentMethod | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetPaymentMethodByID({ PaymentMethodID: id })
      .then((res: IPaymentMethod) => {
        setPaymentMethod(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <PaymentMethodDetails paymentmethod={paymentmethod} Loading={Loading} />
    </div>
  );
};
export default PaymentMethodDetailsPage;
