import type { ICollection } from "../../../shared/types/Collections/ICollection.types";
import { useState } from "react";
export const useCollections = () => {
  const [data] = useState<ICollection[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
