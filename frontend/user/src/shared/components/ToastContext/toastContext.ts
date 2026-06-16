import { createContext } from "react";
import type { ToastData, ToastStyle } from "../Toast/Toast";
export interface IToastContextType {
  addToast: (toast: Omit<ToastData, "id">) => void;
  info: (title: string, message: string, style?: ToastStyle) => void;
  success: (title: string, message: string, style?: ToastStyle) => void;
  error: (title: string, message: string, style?: ToastStyle) => void;
  warning: (title: string, message: string, style?: ToastStyle) => void;
  removeToast: (id: string) => void;
}
export const ToastContext = createContext<IToastContextType | undefined>(undefined);
