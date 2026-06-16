import { useContext } from "react";
import { ToastContext } from "../ToastContext/toastContext";
import type { IToastContextType } from "../ToastContext/toastContext";
export const useToast = (): IToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
