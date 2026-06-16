import type { IPermission } from "../../../shared/types/Permissions/IPermission.types";
import { useState } from "react";
export const usePermissions = () => {
  const [data] = useState<IPermission[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
