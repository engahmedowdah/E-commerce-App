import "./CartDetailsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICart, IPaginatedCarts } from "../../../../shared/types/Carts/ICart.types";
import { GetCartByUserID } from "../../../../business/services";
import CartDetails from "../../components/CartDetails/CartDetails";
const CartDetailsPage = () => {
  const { UserID } = useParams<{ UserID: string }>();
  const [cart, setCart] = useState<ICart | null>(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!UserID) return;
    GetCartByUserID({ UserID: UserID })
      .then((response: IPaginatedCarts) => {
        const data = response?.data;
        const cartData = Array.isArray(data) ? data[0] : data;
        setCart((cartData as ICart) || null);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [UserID]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <CartDetails cart={cart} Loading={Loading} />
    </div>
  );
};
export default CartDetailsPage;
