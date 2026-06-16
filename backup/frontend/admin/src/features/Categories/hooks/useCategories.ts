import type { ICategory } from "../../../shared/types/Categories/ICategory.types";
import { useState } from "react";
export const useCategories = () => {
  const [data] = useState<ICategory[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
