import React from "react";
import "./SuccessModal.css";
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
}
const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText = "Continue",
}) => {
  if (!isOpen) return null;
  return (
    <div className="success-modal-overlay">
      <div className="success-modal-container">
        <div className="success-modal-header">
          <div className="success-modal-header-content">
            <span className="material-symbols-outlined">check_circle</span>
            <h3 className="success-modal-title">{title}</h3>
          </div>
          <button className="success-modal-close" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="success-modal-body">
          <p className="success-modal-message">{message}</p>
        </div>
        <div className="success-modal-footer">
          <button className="success-modal-btn-action" onClick={onClose}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SuccessModal;
