import { useState, useCallback } from "react";
import { ToastContext } from "./toastContext";
import type { IToastContextType } from "./toastContext";
import Toast from "../Toast/Toast";
import type { ToastData, ToastType, ToastStyle } from "../Toast/Toast";
let toastCounter = 0;
const generateId = () => `toast-${Date.now()}-${++toastCounter}`;
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const addToast = useCallback((toast: Omit<ToastData, "id">) => {
    const newToast: ToastData = {
      ...toast,
      id: generateId(),
    };
    setToasts((prev) => [...prev, newToast]);
  }, []);
  const createHelper = useCallback(
    (type: ToastType) =>
      (title: string, message: string, style?: ToastStyle) => {
        addToast({ type, title, message, style });
      },
    [addToast]
  );
  const contextValue: IToastContextType = {
    addToast,
    info: createHelper("info"),
    success: createHelper("success"),
    error: createHelper("error"),
    warning: createHelper("warning"),
    removeToast,
  };
  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="toast-container" id="toast-container">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
export default ToastProvider;
