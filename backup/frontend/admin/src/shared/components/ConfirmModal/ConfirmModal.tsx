import React from "react";
import "./ConfirmModal.css";
interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: "danger" | "warning" | "info";
}
const iconMap: Record<string, string> = {
  danger: "delete_forever",
  warning: "link_off",
  info: "info",
};
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "danger",
}) => {
  if (!isOpen) return null;
  return (
    <div className="confirm-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="confirm-modal-container">
        <div className="confirm-modal-icon-wrap">
          <div className={`confirm-modal-icon ${type}`}>
            <span className="material-symbols-outlined">{iconMap[type]}</span>
          </div>
        </div>
        <div className="confirm-modal-body">
          <h3 className="confirm-modal-title">{title}</h3>
          <p className="confirm-modal-message">{message}</p>
        </div>
        <div className="confirm-modal-footer">
          <button className={`confirm-modal-btn-confirm ${type}`} onClick={onConfirm}>
            {confirmText}
          </button>
          <button className="confirm-modal-btn-cancel" onClick={onClose}>
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
