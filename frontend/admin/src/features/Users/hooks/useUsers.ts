import type { IUser } from "../../../shared/types/Users/IUser.types";
import { useState } from "react";
export const useUsers = () => {
  const [data] = useState<IUser[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
