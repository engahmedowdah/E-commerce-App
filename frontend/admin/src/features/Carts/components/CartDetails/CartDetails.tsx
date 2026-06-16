import "./CartDetails.css";
import { useState } from "react";
import type { ICart } from "../../../../shared/types/Carts/ICart.types";
import LoadingCarts from "../ListCarts/LoadingCarts/LoadingCarts";
import {
  CartDetailsHeader,
  CartDetailsTabs,
  CartDetailsContent,
} from "./components";
interface Props {
  cart?: ICart | null;
  Loading?: boolean;
}
const CartDetails = ({ cart, Loading }: Props) => {
  const [activeTab, setActiveTab] = useState("Details");
  if (Loading) {
    return (
      <div className="py-12 flex justify-center bg-surface-container-lowest rounded-xl shadow-sm">
        <LoadingCarts />
      </div>
    );
  }
  if (!cart) {
    return (
      <div className="py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl shadow-sm border border-dashed border-surface-container-high w-full">
        <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-on-surface-variant">
            error
          </span>
        </div>
        <h4 className="text-lg font-bold text-primary mb-2">Cart Not Found</h4>
        <p className="text-sm font-medium text-on-surface-variant text-center">
            We couldn't find the cart details you're looking for.
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto">
      <CartDetailsHeader
        cart={cart as ICart}
      />
      <CartDetailsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CartDetailsContent
        activeTab={activeTab}
        cart={cart as ICart}
      />
    </div>
  );
};
export default CartDetails;
