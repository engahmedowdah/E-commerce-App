import type { IBaseEntity } from "../IBaseEntity.types";
import type { IOrderProduct } from "../OrderProducts/IOrderProduct.types";
import type { IAddress } from "../Addresses/IAddress.types";
import type { IPayment } from "../Payments/IPayment.types";
import type { IOrderStatus } from "../OrderStatuses/IOrderStatus.types";
import type { IUser } from "../Users/IUser.types";
export interface IOrder extends IBaseEntity {
  UserID: string;
  AddressID: string;
  PaymentID: string;
  OrderStatusID: string;
  Items: IOrderProduct[];
  Address: IAddress;
  Payment: IPayment;
  OrderStatus: IOrderStatus;
  User: IUser;
}
export interface IPaginatedOrders {
  message?: string;
  data: IOrder[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      avgProducts: number;
      totalProducts: number;
      totalAmount: number;
      statusCounts: Record<string, number>;
    };
  };
}
