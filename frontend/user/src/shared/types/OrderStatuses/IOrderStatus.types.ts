import type { IBaseEntity } from "../IBaseEntity.types";
export interface IOrderStatus extends IBaseEntity {
  Name: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
}
export interface IPaginatedOrderStatuses {
  message?: string;
  data: IOrderStatus[];
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
