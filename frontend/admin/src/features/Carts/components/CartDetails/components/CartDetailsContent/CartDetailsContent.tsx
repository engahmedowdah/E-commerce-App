import type { ICart } from '../../../../../../shared/types/Carts/ICart.types';
import {
  CartDetailsInfo,
  CartDetailsStatus,
  CartDetailsProducts,
  CartDetailsSettings,
} from "..";
import { ICartProduct } from '../../../../../../shared/types/CartProducts/ICartProduct.types';
interface Props {
  activeTab: string;
  cart: ICart;
}
const CartDetailsContent: React.FC<Props> = ({ activeTab, cart }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <CartDetailsInfo
              name={(cart as ICart).User?.FirstName? (cart as ICart).User?.FirstName + " " + (cart as ICart).User?.LastName : "Unknown Cart"}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <CartDetailsStatus cart={cart} />
          </div>
        </div>
      )}
      {activeTab === 'Products' && (
        <CartDetailsProducts products={(cart as ICart).Products as ICartProduct[] || []} />
      )}
      {activeTab === 'Settings' && (
        <CartDetailsSettings />
      )}
    </div>
  );
};
export default CartDetailsContent;
