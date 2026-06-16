import "./OrderDetails.css";
import { useState } from "react";
import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import LoadingOrders from "../ListOrders/LoadingOrders/LoadingOrders";
import {
  OrderDetailsHeader,
  OrderDetailsTabs,
  OrderDetailsContent,
} from "./components";
interface Props {
  order?: IOrder | null;
  Loading?: boolean;
}
const OrderDetails = ({ order, Loading }: Props) => {
  const [activeTab, setActiveTab] = useState("Details");
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingOrders />
      </div>
    );
  }
  if (!order) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Order Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the order details you're looking for.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <OrderDetailsHeader
        order={order as IOrder}
      />
      <OrderDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <OrderDetailsContent
        activeTab={activeTab}
        order={order as IOrder}
      />
    </div>
  );
};
export default OrderDetails;
