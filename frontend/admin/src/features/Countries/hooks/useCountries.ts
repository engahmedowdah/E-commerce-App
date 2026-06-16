import type { ICountry } from "../../../shared/types/Countries/ICountry.types";
import { useState } from "react";
export const useCountries = () => {
  const [data] = useState<ICountry[]>([]);
  const [loading] = useState(false);
  return { data, loading };
};
