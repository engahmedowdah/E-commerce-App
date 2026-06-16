import type { IBaseEntity } from "../IBaseEntity.types";
export interface IPaymentStatus extends IBaseEntity {
  Name: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
}
export interface IPaginatedPaymentStatuses {
  message?: string;
  data: IPaymentStatus[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      activeItems: number;
      inactiveItems: number;
    };
  };
}
