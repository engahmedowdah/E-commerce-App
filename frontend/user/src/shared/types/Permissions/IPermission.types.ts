import type { IBaseEntity } from "../IBaseEntity.types";
export interface IPermission extends IBaseEntity {
  Name: string;
  Description?: string;
  IsActivated: boolean;
  IsDeleted: boolean;
}
export interface IPaginatedPermissions {
  message?: string;
  data: IPermission[];
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
