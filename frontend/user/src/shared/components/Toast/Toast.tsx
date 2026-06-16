import "./Toast.css";
import { useState, useEffect, useCallback } from "react";
export type ToastType = "info" | "success" | "error" | "warning";
export type ToastStyle = "basic" | "loading";
export interface ToastData {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  style?: ToastStyle;
  duration?: number;
}
interface ToastProps {
  toast: ToastData;
  onClose: (id: string) => void;
}
const icons: Record<ToastType, React.ReactNode> = {
  info: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11.5 14.5 16 9.5" />
    </svg>
  ),
  error: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  warning: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="13" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};
const Toast = ({ toast, onClose }: ToastProps) => {
  const [exiting, setExiting] = useState(false);
  const duration = toast.duration ?? 5000;
  const style = toast.style ?? "basic";
  const handleClose = useCallback(() => {
    setExiting(true);
    setTimeout(() => onClose(toast.id), 350);
  }, [onClose, toast.id]);
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);
  return (
    <div
      className={`toast-notification toast-${style} toast-${toast.type} ${exiting ? "toast-exit" : ""}`}
      role="alert"
      aria-live="assertive"
    >
      <div className={`toast-icon toast-icon-${toast.type}`}>
        {icons[toast.type]}
      </div>
      <div className="toast-content">
        <p className="toast-title">{toast.title}</p>
        <p className="toast-message">{toast.message}</p>
      </div>
      <button className="toast-close" onClick={handleClose} aria-label="Close notification">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div
        className="toast-progress"
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
};
export default Toast;
