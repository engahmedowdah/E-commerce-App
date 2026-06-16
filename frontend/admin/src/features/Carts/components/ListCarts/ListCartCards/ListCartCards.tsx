import "./ListCartCards.css";
import type { ICart } from "../../../../../shared/types/Carts/ICart.types";
import { CartCard } from "../..";
import LoadingCarts from "../LoadingCarts/LoadingCarts";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  carts: ICart[];
  Loading: boolean;
  onRefresh?: () => void;
}
const ListCartCards = ({ carts, Loading, onRefresh }: Props) => {
  const t = useTranslation();
  const p = t.pages.carts as Record<string, string>;
  if (Loading) {
    return (
      <div className="py-12 flex justify-center">
        <LoadingCarts />
      </div>
    );
  }
  return (
    <div className="row g-3">
      {carts.map((cart, index) => (
        <div key={cart._id || index} className="col-12 col-md-6 col-lg-4">
          <CartCard cart={cart} onRefresh={onRefresh} />
        </div>
      ))}
      {!Loading && carts.length === 0 && (
        <div className="col-12 py-16 flex flex-col items-center justify-center glass-panel border-dashed border-surface-container-high mt-4">
          <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant">inventory_2</span>
          </div>
          <h4 className="text-xl font-black text-primary mb-2">{p.empty}</h4>
          <p className="text-sm font-medium text-on-surface-variant text-center max-w-sm mb-6">{p.emptyHint}</p>
        </div>
      )}
    </div>
  );
};
export default ListCartCards;
