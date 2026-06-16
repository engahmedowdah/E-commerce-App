import type { IBaseEntity } from "../IBaseEntity.types";
import type { IProduct } from "../Products/IProduct.types";
export interface ICategory extends IBaseEntity {
  Name: string;
  Description?: string;
  Slug: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
  Products?: IProduct[];
}
export interface IPaginatedCategories {
  message?: string;
  data: ICategory[];
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
