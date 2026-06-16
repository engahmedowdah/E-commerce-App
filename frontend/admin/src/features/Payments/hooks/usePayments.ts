import type { IPayment } from "../../../shared/types/Payments/IPayment.types";
import { useState } from "react";
export const usePayments = () => {
  const [data] = useState<IPayment[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
