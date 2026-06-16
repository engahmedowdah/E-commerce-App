import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import { GetProductByID } from "../../../../business/services";
import { ProductDetails } from "../../components";
import "./ProductDetailsPage.css";
const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetProductByID({ ProductID: id })
      .then((res: IProduct) => {
        setProduct(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <ProductDetails product={product} Loading={Loading} />
    </div>
  );
};
export default ProductDetailsPage;
