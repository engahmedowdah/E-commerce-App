import type { IPaymentMethod } from "../../../shared/types/PaymentMethods/IPaymentMethod.types";
import { useState } from "react";
export const usePaymentMethods = () => {
  const [data] = useState<IPaymentMethod[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
