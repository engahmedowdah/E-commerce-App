import type { IPaymentStatus } from "../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import { useState } from "react";
export const usePaymentStatuses = () => {
  const [data] = useState<IPaymentStatus[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
