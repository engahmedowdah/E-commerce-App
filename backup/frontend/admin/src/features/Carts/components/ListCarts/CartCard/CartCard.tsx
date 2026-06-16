import "./CartCard.css";
import type { ICart } from "../../../../../shared/types/Carts/ICart.types";
import { useNavigate } from "react-router-dom";
interface Props {
  cart: ICart;
  onRefresh?: () => void;
}
const CartCard = ({ cart }: Props) => {
  const navigate = useNavigate();
  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/carts/${cart.UserID}`);
  };
  return (
    <>
      <div className="card h-100 shadow-sm border-0 bg-white" onClick={handleView} style={{ cursor: "pointer" }}>
        <div className="card-body d-flex align-items-center">
          <div
            className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3"
            style={{ width: "48px", height: "48px", minWidth: "48px" }}
          >
            <span className="text-success fw-bold text-uppercase">{cart.User?.FirstName?.substring(0, 1) || "C"}</span>
          </div>
          <div className="flex-grow-1 min-w-0">
            <h5 className="card-title mb-1 text-truncate">{cart.User?.FirstName? cart.User?.FirstName + " " + cart.User?.LastName : "Unknown"}</h5>
            <p className="card-text text-muted small mb-0 text-truncate-2">
              {`Products Count: ${cart.Products.length}`}
            </p>
          </div>
          <div className="ms-auto">
            <span>Total Price: {cart.TotalPrice} SAR</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartCard;
