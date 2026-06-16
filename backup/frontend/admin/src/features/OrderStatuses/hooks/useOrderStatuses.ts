import type { IOrderStatus } from "../../../shared/types/OrderStatuses/IOrderStatus.types";
import { useState } from "react";
export const useOrderStatuses = () => {
  const [data] = useState<IOrderStatus[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
