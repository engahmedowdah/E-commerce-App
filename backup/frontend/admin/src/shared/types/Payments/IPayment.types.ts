import type { IBaseEntity } from "../IBaseEntity.types";
import type { IPaymentMethod } from "../../types/PaymentMethods/IPaymentMethod.types";
import type { IPaymentStatus } from "../../types/PaymentStatuses/IPaymentStatus.types";
import type { IUser } from "../Users/IUser.types";
export interface IPayment extends IBaseEntity {
  UserID: string;
  Amount: number;
  CurrencySymbol: string;
  PaymentMethodID: string;
  PaymentStatusID: string;
  User: IUser;
  PaymentMethod: IPaymentMethod;
  PaymentStatus: IPaymentStatus;
}
export interface IPaginatedPayments {
  data: IPayment[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      activeItems: number;
      inactiveItems: number;
      totalAmount: number;
    };
  };
}
