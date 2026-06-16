import "./PaymentCard.css";
import { useState, useRef, useEffect } from "react";
import type { IPayment } from "../../../../../shared/types/Payments/IPayment.types";
import { useNavigate } from "react-router-dom";
interface Props {
  payment: IPayment;
}
const PaymentCard = ({ payment }: Props) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(false);
    navigate(`/payments/edit/${payment._id}`);
  };
  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/payments/${payment._id}`);
  };
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="card h-100 shadow-sm border-0 bg-white" onClick={handleView} style={{ cursor: "pointer" }}>
        <div className="card-body d-flex align-items-center">
          <div
            className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3"
            style={{ width: "48px", height: "48px", minWidth: "48px" }}
          >
            <span className="text-success fw-bold text-uppercase">{payment.PaymentMethod?.Name?.substring(0, 1) || "C"}</span>
          </div>
          <div className="flex-grow-1 min-w-0">
            <h5 className="card-title mb-1 text-truncate">{payment.PaymentMethod?.Name || "New Payment"}</h5>
            <p className="card-text text-muted small mb-0 text-truncate-2">
              {payment.Amount !== undefined && payment.Amount !== null
                ? payment.Amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                : "$0.00"}
            </p>
          </div>
          <div className="dropdown ms-2" ref={dropdownRef}>
            <button className="btn btn-link text-muted p-0" type="button" onClick={toggleDropdown}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
              </svg>
            </button>
            <ul className={`dropdown-menu dropdown-menu-end ${showDropdown ? "show" : ""}`}>
              <li><button className="dropdown-item" onClick={handleEdit}>Edit</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentCard;
