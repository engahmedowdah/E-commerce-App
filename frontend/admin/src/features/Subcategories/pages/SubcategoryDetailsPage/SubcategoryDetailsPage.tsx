import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import { GetSubcategoryByID } from "../../../../business/services";
import { SubcategoryDetails } from "../../components";
import "./SubcategoryDetailsPage.css";
const SubcategoryDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [subcategory, setSubcategory] = useState<ISubcategory | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetSubcategoryByID({ SubcategoryID: id })
      .then((res: ISubcategory) => {
        setSubcategory(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <SubcategoryDetails subcategory={subcategory} Loading={Loading} />
    </div>
  );
};
export default SubcategoryDetailsPage;
