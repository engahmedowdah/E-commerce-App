import type { IRole } from "../../../shared/types/Roles/IRole.types";
import { useState } from "react";
export const useRoles = () => {
  const [data] = useState<IRole[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
