import type { IBaseEntity } from "../IBaseEntity.types";
import type { IPermission } from "../Permissions/IPermission.types";
export interface IRole extends IBaseEntity {
  Name: string;
  Description?: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
  Permissions: IPermission[] | string[];
}
export interface IPaginatedRoles {
  message?: string;
  data: IRole[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      activeItems: number;
      inactiveItems: number;
      totalPermissions: number;
      avgPermissions: number;
    };
  };
}
