import type { IProduct } from "../../../shared/types/Products/IProduct.types";
import { useState } from "react";
export const useProducts = () => {
  const [data] = useState<IProduct[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
