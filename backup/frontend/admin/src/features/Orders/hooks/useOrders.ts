import type { IOrder } from "../../../shared/types/Orders/IOrder.types";
import { useState } from "react";
export const useOrders = () => {
  const [data] = useState<IOrder[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
