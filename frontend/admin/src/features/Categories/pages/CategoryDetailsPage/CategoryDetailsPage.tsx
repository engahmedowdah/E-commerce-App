import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import { GetCategoryByID } from "../../../../business/services";
import { CategoryDetails } from "../../components";
import "./CategoryDetailsPage.css";
const CategoryDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<ICategory | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetCategoryByID({ CategoryID: id })
      .then((res: ICategory) => {
        setCategory(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <CategoryDetails category={category} Loading={Loading} />
    </div>
  );
};
export default CategoryDetailsPage;
