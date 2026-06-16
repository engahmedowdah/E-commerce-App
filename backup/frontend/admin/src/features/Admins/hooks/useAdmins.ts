import type { IAdmin } from "../../../shared/types/Admins/IAdmin.types";
import { useState } from "react";
export const useAdmins = () => {
  const [data] = useState<IAdmin[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
