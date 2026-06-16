import type { IBaseEntity } from "../IBaseEntity.types";
import type { IProduct } from "../Products/IProduct.types";
export interface ICollection extends IBaseEntity {
  Name: string;
  Slug: string;
  Description?: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
  Products?: IProduct[];
}
export interface IPaginatedCollections {
  message?: string;
  data: ICollection[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      activeItems: number;
      inactiveItems: number;
      avgProducts: number;
    };
  };
}
