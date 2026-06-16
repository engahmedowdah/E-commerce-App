import type { IBaseEntity } from "../IBaseEntity.types";
export interface IPaymentMethod extends IBaseEntity {
  Name: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
}
export interface IPaginatedPaymentMethods {
  data: IPaymentMethod[];
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
