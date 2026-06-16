import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import { GetOrderStatusByID } from "../../../../business/services";
import { OrderStatusDetails } from "../../components";
import "./OrderStatusDetailsPage.css";
const OrderStatusDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [orderstatus, setOrderStatus] = useState<IOrderStatus | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetOrderStatusByID({ OrderStatusID: id })
      .then((res: IOrderStatus) => {
        setOrderStatus(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <OrderStatusDetails orderstatus={orderstatus} Loading={Loading} />
    </div>
  );
};
export default OrderStatusDetailsPage;
