import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICountry } from "../../../../shared/types/Countries/ICountry.types";
import { GetCountryByID } from "../../../../business/services";
import { CountryDetails } from "../../components";
import "./CountryDetailsPage.css";
const CountryDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<ICountry | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetCountryByID({ CountryID: id })
      .then((res: ICountry) => {
        setCountry(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <CountryDetails country={country} Loading={Loading} />
    </div>
  );
};
export default CountryDetailsPage;
