import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import { GetOrderByID } from "../../../../business/services";
import { OrderDetails } from "../../components";
import "./OrderDetailsPage.css";
const OrderDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<IOrder | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetOrderByID({ OrderID: id })
      .then((res: IOrder) => {
        setOrder(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <OrderDetails order={order} Loading={Loading} />
    </div>
  );
};
export default OrderDetailsPage;
