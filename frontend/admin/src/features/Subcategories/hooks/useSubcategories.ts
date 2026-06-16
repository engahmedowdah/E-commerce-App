import type { ISubcategory } from "../../../shared/types/Subcategories/ISubcategory.types";
import { useState } from "react";
export const useSubcategories = () => {
  const [data] = useState<ISubcategory[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
