import type { ICart } from "../../../shared/types/Carts/ICart.types";
import { useState } from "react";
export const useCarts = () => {
  const [data] = useState<ICart[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
