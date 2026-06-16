import type { IBaseEntity } from "../IBaseEntity.types";
import type { ICategory } from "../Categories/ICategory.types";
import { IProduct } from "../Products/IProduct.types";
export interface ISubcategory extends IBaseEntity {
  Name: string;
  Description?: string;
  Products?: IProduct[];
  CategoryID?: string;
  Category?: ICategory;
  Slug?: string;
  IsActivated?: boolean;
  IsDeleted?: boolean;
}
export interface IPaginatedSubcategories {
  message?: string;
  data: ISubcategory[];
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
